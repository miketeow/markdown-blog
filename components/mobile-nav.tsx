"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icon";
import { siteConfig } from "@/config/site";

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  classname?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  classname,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={classname}
      {...props}
    >
      {children}
    </Link>
  );
}

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink href="/" classname="flex items-center">
          <Icons.logo className="mr-2 size-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <Link href={siteConfig.link.github} target="_blank" rel="noreferrer">
            Github
          </Link>
          <Link href={siteConfig.link.twitter} target="_blank" rel="noreferrer">
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
