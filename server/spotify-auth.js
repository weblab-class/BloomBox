const querystring = require("querystring")

const CLIENT_ID = "95cd44000f4c4fcc8e52ebe419beaefa";
const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize?";
const REDIRECT_URI = "http://localhost:5173/play/";
const SCOPES = [];
const SCOPE = SCOPES.join(" ");


const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

function login(req, res) {
    const state = generateRandomString(16);
    const authUrl = String(AUTHORIZE_ENDPOINT +
    querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: SCOPE,
        redirect_uri: REDIRECT_URI,
        state: state
    }));
    return res.send({ url: authUrl });
}

module.exports = {
    login,
};