import { posts } from "#site/content";
import { Tag } from "@/components/tag";
import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Tags",
  description: "topics I've written about",
};
const TagsPage = () => {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Tags</h1>
        </div>
      </div>

      <hr className="my-4 " />
      <div className="flex flex-wrap gap-3">
        {sortedTags.map((tag) => (
          <Tag key={tag} tag={tag} count={tags[tag]} />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
