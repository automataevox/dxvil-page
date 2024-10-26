import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GUMROAD_SECRET = process.env.GUMROAD_API_TOKEN;

export const getArtistTracks = async (artistId:any, accessToken:any) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=50`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching artist tracks:', error);
        throw error;
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