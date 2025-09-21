export interface GithubActivity {
  contributions: number;
}

export async function getGithubActivity(): Promise<GithubActivity> {
  const username = process.env.GITHUB_USERNAME || "AbhinRustagi";
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GitHub token not found, returning default values");
    return {
      contributions: 0,
    };
  }

  try {
    // Get last 365 days date range
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const from = oneYearAgo.toISOString();
    const to = today.toISOString();

    // GraphQL query to get contributions for the last 365 days
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
          from,
          to,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    const contributions =
      data.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions || 0;

    return {
      contributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return {
      contributions: 0,
    };
  }
}
