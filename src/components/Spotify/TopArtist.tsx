"use client";
import { useEffect, useState } from "react";

export default function TopArist() {
  const [topArtists, setTopArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchTopArtists = async () => {
    try {
      const response = await fetch("/api/spotify/topArtists");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTopArtists(data.items);
      console.log("Top artists:", topArtists);
    } catch (error) {
      console.error("Error fetching top artists:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTopArtists();
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      Top artist:
      {topArtists[0]?.name}
      {/* <img src={topArtists[0]?.images[0].url} alt="" /> */}
    </div>
  );
}
