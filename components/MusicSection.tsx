import { useEffect, useState } from 'react';
import { getArtistTracks } from '@/lib/api';
import SongCard from "./songCard";

export default function MusicSection() {
    const [tracks, setTracks] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchTracks = async () => {
            const artistId = 'your_spotify_artist_id';
            const tracks = await getArtistTracks(artistId);
            setTracks(tracks);  // If an empty array is returned, it will just render nothing
        };

        fetchTracks();
    }, []);

    return (
        <div className="flex gap-2 flex-col mt-5">
            <h1 className={`text-xl`}>MUSIC</h1>
            <SongCard songData={tracks} />
        </div>
    );
}
