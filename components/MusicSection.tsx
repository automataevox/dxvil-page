import { useEffect, useState } from "react";
import { getArtistTracks } from "@/lib/api";
import SongCard from "./songCard";

export default function MusicSection() {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const tokenResponse = await fetch('/api/getAccessToken');
      const data = await tokenResponse.json();

      // Check if accessToken is present
      if (!data.accessToken) {
          throw new Error('Failed to retrieve access token');
      }

      const accessToken = data.accessToken;
      const artistId = "1Ngynwc6bFIKGzRcOrBAnx";

      const tracks  = await getArtistTracks(artistId, accessToken);
      setTracks(tracks); // If an empty array is returned, it will just render nothing
    };

    fetchTracks();
  }, []);

  return (
    <div className="flex gap-2 flex-col">
       <header>
        <h2 className="text-2xl">MUSIC</h2>
      </header>

      <SongCard songData={tracks} />
    </div>
  );
}
