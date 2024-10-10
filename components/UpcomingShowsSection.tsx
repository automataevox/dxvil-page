import { useEffect, useState } from "react";
import { getArtistTracks } from "@/lib/api";
import NewReleaseCard from "./NewReleaseCard";

export default function UpcomingShowsSection() {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const artistId = "1Ngynwc6bFIKGzRcOrBAnx";
      const tracks = await getArtistTracks(artistId);
      setTracks(tracks);
    };

    fetchTracks();
  }, []);

  console.log(tracks)

  return (
    <div className="flex flex-col gap-3">
      <header>
        <h2 className="text-2xl">UPCOMING SHOWS</h2>
      </header>
      <main className="h-[8rem] grid place-items-center">
        <h2 className="m-font">No upcoming shows available</h2>
      </main>
    </div>
  );
}
