import { topArtists } from "@/lib/spotify";

export async function GET() {
  try {
    const topArtistsResponse = await topArtists();
    return new Response(topArtistsResponse.body, {
      status: topArtistsResponse.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
}
