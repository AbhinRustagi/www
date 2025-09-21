export interface WakatimeActivity {
  last7DaysCoding: number;
}

export async function getWakatimeActivity(): Promise<WakatimeActivity> {
  const username = process.env.WAKATIME_USERNAME;
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!username || !apiKey) {
    console.warn("Wakatime credentials not found, returning default values");
    return {
      last7DaysCoding: 0,
    };
  }

  try {
    // Use Basic Authentication as per WakaTime API documentation
    const authHeader = `Basic ${Buffer.from(apiKey).toString("base64")}`;

    // Fetch last 7 days stats
    const last7DaysResponse = await fetch(
      `https://api.wakatime.com/api/v1/users/${username}/stats/last_7_days`,
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );

    if (!last7DaysResponse.ok) {
      throw new Error(
        `Wakatime API error for last 7 days: ${last7DaysResponse.status}`
      );
    }

    const last7DaysData = await last7DaysResponse.json();

    // Extract total seconds and convert to hours
    const totalSeconds7Days = last7DaysData.data?.total_seconds || 0;
    const last7DaysCoding = Math.round((totalSeconds7Days / 3600) * 100) / 100; // Round to 2 decimal places

    return {
      last7DaysCoding,
    };
  } catch (error) {
    console.error("Error fetching Wakatime activity:", error);
    return {
      last7DaysCoding: 0,
    };
  }
}
