import { useEffect, useState } from "react";
import { getArtistTracks } from "@/lib/api";
import NewReleaseCard from "./NewReleaseCard";

export default function NewReleasesSection() {
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
        <h2 className="text-2xl">NEW RELEASES</h2>
      </header>
      <main>
        <NewReleaseCard newReleaseData={tracks} upcomingId="Thoughts Of You"  />
      </main>
    </div>
  );
}
