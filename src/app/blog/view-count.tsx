"use client";

import { useEffect, useState } from "react";

export function ViewCount({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.views >= 15) setViews(data.views);
      })
      .catch(() => {});
  }, [slug]);

  if (views === null) return null;

  return <p className="text-xs text-text-muted">{views} views</p>;
}

export function PostViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.views >= 15) setViews(data.views);
      })
      .catch(() => {});
  }, [slug]);

  if (views === null) return null;

  return (
    <>
      <span>&middot;</span>
      <span>{views} views</span>
    </>
  );
}
