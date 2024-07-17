import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import React from "react";
import { Icons } from "./icon";

const SiteFooter = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:mike_teow@outlook.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.link.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.link.github}>
            <span className="sr-only">Github</span>
            <Icons.gitHub className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
