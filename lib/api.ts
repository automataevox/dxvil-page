import axios from 'axios';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_APP_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_APP_SECRET;
const GUMROAD_SECRET = process.env.NEXT_PUBLIC_GUMROAD_API_TOKEN;

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
        return null;
    }
};

export const getArtistTracks = async (artistId: string) => {
    try {
        const accessToken = await getAccessToken();

        if (!accessToken) {
            throw new Error("Failed to retrieve access token.");
        }

        const response = await axios.get(`https://api.spotify.com/v1/artists/1Ngynwc6bFIKGzRcOrBAnx/albums?limit=50`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return response.data.items;
    } catch (error) {
        console.error(`Error fetching tracks for DXVIL:`, error);
        return []; 
    }
};

export const getGumRoadProducts = async () => {
    try {
        const response = await axios.get(`https://api.gumroad.com/v2/products`, {
            headers: {
                'Authorization': `Bearer ${GUMROAD_SECRET}`
            }
        });

        return response.data;
    } catch (error) {
        return []; 
    }
  }