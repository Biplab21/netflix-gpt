export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/75203688?v=4"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
  }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "bn", name: "Bengali" }
]
