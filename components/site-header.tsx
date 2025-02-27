import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 border-b bg-background/95 border-border backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.link.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.link.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
