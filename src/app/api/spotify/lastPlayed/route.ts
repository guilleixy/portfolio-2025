import { recentlyPlayedSongs } from "@/lib/spotify";
import { currentlyPlayingSong } from "@/lib/spotify";
import { log } from "node:console";

export async function GET() {
  try {
    const currentlyPlayingResponse = await currentlyPlayingSong();
    if (currentlyPlayingResponse.status === 204) {
      const recentlyPlayedResponse = await recentlyPlayedSongs();
      const recentlyPlayedData = await recentlyPlayedResponse.json();

      return new Response(JSON.stringify(recentlyPlayedData.items[0]), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(currentlyPlayingResponse.body, {
        status: currentlyPlayingResponse.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    log(error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
