//get the developers api from ==>>  https://developer.spotify.com/
//doc ==>> https://developer.spotify.com/documentation/web-api/quick-start/

//for user authentication
export const authEndPoint = "https://accounts.spotify.com/authorize";

// after successful authentication redirect to below uri
const redirectUri = "http://localhost:3000/";

const clientId = "77f37d43ece442e79bbf29e854bfcdc6";

const scopes = [
  // allows the user to perform this actions is spotify
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
  //localhost:3000/
  //#access_token = BQCZo0BpRbMfX9MxgtKTJzwD5osFcqVBpWThv4VKJI_ewe96Vzs7E9p9t3IYhlkh1qgwxv6G
  //- 5Nh8P8J2rwNE2i5h7M4iWP8wsNCjhnKtd - Crg9VG5B0uTs2PwWZ83NsDAjPLGS6Ws8t47XgSxqvHlRse
  //HSyzI4_OTYDxvml_DMVYR5Y & token_type=Bearer & expires_in=3600
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
