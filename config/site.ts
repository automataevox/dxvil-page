export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DXVIL",
  description: "Meet DXVIL - Techno & DnB music producer based in Czech Repulic. New rising artist in electronic dance music scene!",
  artistEmail: "artist@dxvil.com",
  bookingEmail: "booking@dxvil.com",
  navItems: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "MUSIC",
      href: "/music",
    },
    {
      label: "SHOWS",
      href: "/shows",
    },
    // {
    //   label: "PRODUCTS",
    //   href: "/products",
    // },
    {
      label: "CONTACT",
      href: "/contact",
    },
    {
      label: "ABOUT",
      href: "/about",
    },
    // {
    //   label: "MERCH",
    //   href: "/merch",
    // },
  ],
  links: {
    spotify: "https://open.spotify.com/artist/1Ngynwc6bFIKGzRcOrBAnx",
    twitch: "https://twitch.tv/dxvilmusic",
    youtube: "https://youtube.com/@dxvilmusic",
    discord: "https://discord.gg/JJsjGEQydm",
    instagram: "https://instagram.com/dxvilmusic",
    appleMusic: "https://music.apple.com/us/artist/dxvil/1581545014",
  },
};
