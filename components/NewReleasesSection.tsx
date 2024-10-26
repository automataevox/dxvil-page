import { useEffect, useState } from "react";
import { getArtistTracks } from "@/lib/api";
import NewReleaseCard from "./NewReleaseCard";

interface Track {
  id: string; // Example property
  name: string; // Example property
  // Add other properties based on your API response
}

export default function NewReleasesSection() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTracks = async () => {
            setIsLoading(true);

            try {
                // Fetch access token from the backend API route
                const tokenResponse = await fetch('/api/getAccessToken');
                const data = await tokenResponse.json();

                // Check if accessToken is present
                if (!data.accessToken) {
                    throw new Error('Failed to retrieve access token');
                }

                const accessToken = data.accessToken;
                const artistId = "1Ngynwc6bFIKGzRcOrBAnx";

                // Fetch artist tracks using the access token
                const fetchedTracks  = await getArtistTracks(artistId, accessToken);

                // Ensure fetchedTracks is defined and is an array
                if (Array.isArray(fetchedTracks)) {
                    setTracks(fetchedTracks);
                } else {
                    throw new Error('Fetched tracks is not an array');
                }
            } catch (error) {
                console.error("Error fetching tracks:", error);
            } finally {
                setIsLoading(false);
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
