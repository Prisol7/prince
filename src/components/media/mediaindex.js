import Spotify1 from "./spotify1";
import Spotify2 from "./spotify2";
import Spotify3 from "./spotify3";
import Spotify4 from "./spotify4";

const url1 = 'https://open.spotify.com/embed/track/2WirHpGRlweCw1J6BMzZQB';
const url2 = 'https://open.spotify.com/embed/track/03Nb0CCv5lusmkqtKGQ7fP';
const url3 = 'https://open.spotify.com/embed/track/0fGpdyIO70x5vXKI96h7Ij';
const url4 = 'https://open.spotify.com/embed/track/13zkJroNrSee6C9w1S2T1i';

export const media = [url1, url2, url3, url4];
export const mediaByIndex = index => media[index % media.length];
