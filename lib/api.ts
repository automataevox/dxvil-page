import axios from 'axios';

// Your Spotify API credentials
const CLIENT_ID = 'your_client_id';
const CLIENT_SECRET = 'your_client_secret';

// Function to get access token using Client Credentials Flow
const getAccessToken = async () => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials'
            }), {
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;  // Return null or handle the error appropriately
    }
};

// Fetch artist's tracks using Spotify API
export const getArtistTracks = async (artistId: string) => {
    try {
        const accessToken = await getAccessToken();

        // If accessToken is null, don't proceed further
        if (!accessToken) {
            throw new Error("Failed to retrieve access token.");
        }

        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return response.data.tracks;
    } catch (error) {
        console.error(`Error fetching tracks for artist ID ${artistId}:`, error);
        return [];  // Return an empty array in case of error
    }
};
