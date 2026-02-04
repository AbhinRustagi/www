import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

export const prerender = false;

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get("slug");

  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
    });
  }

  const count = (await redis.get<number>(`views:${slug}:count`)) ?? 0;

  return new Response(JSON.stringify({ views: count }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const slug = body?.slug;

  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
    });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  const isNew = await redis.sadd(`views:${slug}:ips`, ip);

  if (isNew) {
    await redis.incr(`views:${slug}:count`);
  }

  const count = (await redis.get<number>(`views:${slug}:count`)) ?? 0;

  return new Response(JSON.stringify({ views: count }), {
    headers: { "Content-Type": "application/json" },
  });
};
