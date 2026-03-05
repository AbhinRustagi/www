import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const count = (await redis.get<number>(`views:${slug}:count`)) ?? 0;
  return NextResponse.json({ views: count });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slug = body?.slug;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const isNew = await redis.sadd(`views:${slug}:ips`, ip);

  if (isNew) {
    await redis.incr(`views:${slug}:count`);
  }

  const count = (await redis.get<number>(`views:${slug}:count`)) ?? 0;
  return NextResponse.json({ views: count });
}
