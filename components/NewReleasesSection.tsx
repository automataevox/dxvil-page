import { useEffect, useState } from "react";
import { getArtistTracks } from "@/lib/api";
import NewReleaseCard from "./NewReleaseCard";

export default function NewReleasesSection() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true); // Start loading
      try {
        const artistId = "1Ngynwc6bFIKGzRcOrBAnx";
        const fetchedTracks = await getArtistTracks(artistId);
        setTracks(fetchedTracks);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <header>
        <h2 className="text-2xl">NEW RELEASES</h2>
      </header>
      <main>
        <NewReleaseCard newReleaseData={tracks} isLoading={isLoading} />
      </main>
    </div>
  );
}
