import { useEffect, useState } from 'react';
import { getArtistTracks } from '@/lib/api';
import NewReleaseCard from './NewReleaseCard';

export default function NewReleasesSection() {
    const [tracks, setTracks] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchTracks = async () => {
            const artistId = 'your_spotify_artist_id';
            const tracks = await getArtistTracks(artistId);
            setTracks(tracks); 
        };

        fetchTracks();
    }, []);

    return (
        <div>
          <header>
            <h2 className="text-2xl">NEW RELEASES</h2>
          </header>
          <main>
          <NewReleaseCard newReleaseData={tracks}/>
          </main>
        </div>
    );
}
