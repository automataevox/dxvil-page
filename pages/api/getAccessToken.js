// pages/api/getAccessToken.js
import axios from 'axios';

const CLIENT_ID = process.env.SPOTIFY_APP_ID;
const CLIENT_SECRET = process.env.SPOTIFY_APP_SECRET;

// Generate the base64 encoded access token once, outside the function
const SpotifyAccessTokenRaw = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

export default async function handler(req, res) {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        return res.status(500).json({ error: 'Environment variables missing' });
    }

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${SpotifyAccessTokenRaw}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        res.status(200).json({ accessToken: response.data.access_token });
    } catch (error) {
        console.error('Error fetching access token:', error);
        res.status(500).json({ error: 'Failed to fetch access token' });
    }
}
