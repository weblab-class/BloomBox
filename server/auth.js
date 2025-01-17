const querystring = require("querystring")
const User = require("./models/user");

const CLIENT_SECRET = process.env.SESSION_SECRET;
const CLIENT_ID = "95cd44000f4c4fcc8e52ebe419beaefa";
const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize?";
const REDIRECT_URI = "http://localhost:3000/api/users/create/";
const SCOPES = ["user-read-private", "user-read-email"];
const SCOPE = SCOPES.join(" ");

// convert a fetch result to a JSON object with error handling for fetch and json errors
function convertToJSON(res) {
    if (!res.ok) {
      throw `API request failed with response status ${res.status} and text: ${res.statusText}`;
    }
  
    return res
      .clone() // clone so that the original is still readable for debugging
      .json() // start converting to JSON object
      .catch((error) => {
        // throw an error containing the text that couldn't be converted to JSON
        return res.text().then((text) => {
          throw `API request's result could not be converted to a JSON object: \n${text}`;
        });
      });
  }

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

function getOrCreateUser(user) {
    return User.findOne({ email: user.email }).then((existingUser) => {
        if (existingUser) return existingUser;

        const newUser = new User({
            email: user.email,
            displayName: user.displayName,
        });

        return newUser.save();
    });
}

function authorize(req, res) {
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

function requestAccessToken(code) {
    return fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
        }).toString(),
    })
        .then(convertToJSON)
        .catch((error) => {
            throw `Request of Access Token failed with error:\n${error}`;
        });
}

function requestUserInfo(accessToken) {
    return fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(convertToJSON)
        .catch((error) => {
            throw `Request user profile failed with error:\n${error}`;
        });
}

async function create(req, res) {
    const code = req.query.code;

    const tokenResponse = await requestAccessToken(code);

    const accessToken = tokenResponse.access_token;

    const profileResponse = await requestUserInfo(accessToken);
    
    const user = {
        email: profileResponse.email,
        displayName: profileResponse.display_name,
    }

    const userItem = await getOrCreateUser(user);

    const userId = userItem._id.toString(); 

    res.redirect(
        `http://localhost:5173/game/profile/${userId}`
    );
}

function current(req, res) {

}

function logout(req, res) {

}

function populateCurrentUser(req, res, next) {

}

function ensureLoggedIn(req, res, next) {

}

module.exports = {
    authorize,
    create,
    current,
    logout,
    populateCurrentUser,
    ensureLoggedIn,
};