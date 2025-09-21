import { getAllPosts } from "@/lib/blog";
import HomeContent from "@/components/HomeContent";
import { getGithubActivity } from "@/lib/github";
import { getWakatimeActivity } from "@/lib/wakatime";

export default async function Home() {
  const posts = await getAllPosts();
  const githubActivity = await getGithubActivity();
  const wakatimeActivity = await getWakatimeActivity();

  return (
    <HomeContent
      posts={posts}
      githubActivity={githubActivity}
      wakatimeActivity={wakatimeActivity}
    />
  );
}
