import { Icon } from "@iconify/react";

export const API_KEY = "AYw5fFrqMVRzMRgfJPWrfUrUMZYazi1rdpZKQrq6";

// apis
export const API_FEED = "https://api.nasa.gov/planetary/apod?api_key=";
export const API_SEARCH = "https://images-api.nasa.gov/search?q=";

const error = {
  error: {
    code: "OVER_RATE_LIMIT",
    message:
      "You have exceeded your rate limit. Try again later or contact us at https://api.nasa.gov:443/contact/ for assistance",
  },
};

// icons
export enum Icons {
  Google = "flat-color-icons:google",
  Discord = "akar-icons:discord-fill",
  Twitter = "ant-design:twitter-circle-filled",
  Instagram = "ant-design:instagram-filled",
  Github = "akar-icons:github-fill",
  // HeartOut = "",
  // HeartFil = "",
  Logo = "simple-icons:nasa",
  Warning = "ant-design:warning-filled",
  Tick = "charm:circle-tick",
  User = "bx:bxs-user-circle",
  Password = "carbon:password",
  Email = "ic:twotone-alternate-email"
}
