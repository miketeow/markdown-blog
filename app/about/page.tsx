import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "Mike's About Page",
};

const AboutPage = async () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10 ">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="size-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          consequatur id, sapiente incidunt rerum nihil nesciunt ipsa magnam
          maiores praesentium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium, maxime cupiditate! Eligendi, provident
          numquam neque tenetur dignissimos nostrum soluta nam cupiditate dolor
          similique at quibusdam cumque harum repellendus corporis ullam! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Saepe modi, autem
          voluptate a, officiis repudiandae eos illum aut laborum sunt veritatis
          accusantium atque, animi quas hic culpa? Sint quidem, rerum voluptatem
          commodi ipsam officia sapiente voluptatibus voluptates nulla, libero
          veniam pariatur. Neque assumenda repudiandae eos nobis, atque
          corrupti. Cupiditate, numquam! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Qui repudiandae rerum expedita ut eos laboriosam
          dolorem, animi dolorum at excepturi? Sint repellendus rerum
          voluptatibus quaerat corporis, eveniet fugit aperiam excepturi
          blanditiis saepe voluptates amet quo ipsum consequuntur, iste dicta
          assumenda accusamus. Tempora laborum sapiente natus in animi tenetur
          voluptatum iusto?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
