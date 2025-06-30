"use client";
import { useEffect, useState } from "react";
import { getTimeAgo } from "@/utils/getTimeAgo";

export default function CurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchCurrentTrack = async () => {
    try {
      const response = await fetch("/api/spotify/lastPlayed");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCurrentTrack(data);
      console.log("Current track:", data);
      console.log("Current track pasado a state:", currentTrack);
    } catch (error) {
      console.error("Error fetching top artists:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCurrentTrack();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : currentTrack?.source === "recentlyPlayed" ? (
    <div>
      Escuchando hace {getTimeAgo(currentTrack.data.items[0].played_at)}{" "}
      {currentTrack.data.items[0].track.name} by{" "}
      {currentTrack.data.items[0].track.artists[0].name}
    </div>
  ) : (
    <div>
      Escuchando ahora mismo: {currentTrack.data.item.name} by{" "}
      {currentTrack.data.item.artists[0].name}
    </div>
  );
}
