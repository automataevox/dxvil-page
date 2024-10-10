import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { FaDiscord, FaInstagram, FaSpotify, FaTwitch, FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-lg",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      
      <NavbarContent justify="center">
        <Image src={logo} className="w-[2rem] animate-pulse" alt="logo"/>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link isExternal href={siteConfig.links.spotify} title="Twitter">
            <FaSpotify size={21} className="text-default-500"/>
          </Link>
          <Link isExternal href={siteConfig.links.twitch} title="Discord">
            <FaTwitch size={21} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.youtube} title="Discord">
            <FaYoutube size={21} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram} title="GitHub">
            <FaInstagram size={21} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.appleMusic} title="Discord">
            <SiApplemusic size={21} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <FaDiscord size={21} className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
