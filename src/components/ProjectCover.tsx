"use client";
import { Image, buildSrc } from "@imagekit/next";
import Link from "next/link";
import { useState } from "react";
import { photographyPageDetails, modifiedObjectCovers } from "@/utils/utils";
import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  imagePath: string;
  directory: string;
  year?: string;
  alt?: string;
  projectCoverClassName?: string;
  isLoading?: boolean;
};

const ProjectCover = ({
  imagePath,
  directory,
  projectCoverClassName = "",
  isLoading = false,
}: ProjectCoverProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  if (isLoading) {
    return (
      <div className="flex animate-pulse bg-gray-200 w-full h-16 rounded-sm">
        <div className="text-xl m-auto font-semibold">Loading...</div>
      </div>
    );
  }

  const inlineObjectPosition =
    imagePath in modifiedObjectCovers
      ? {
          objectPosition: modifiedObjectCovers[
            imagePath as keyof typeof modifiedObjectCovers
          ].replace("_", " "),
        }
      : {};

  const combinedClassName = cn(
    "w-full",
    "h-full",
    "aspect-[4/3]",
    "group-hover:brightness-75",
    "group-focus:brightness-75",
    "group-active:brightness-75",
    "transition",
    "duration-200",
    "ease-in-out",
    "bg-gray-200",
    "object-cover",
    projectCoverClassName
  );

  const placeholderStyle = showPlaceholder
    ? {
        backgroundImage: `url(${buildSrc({
          urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT || "",
          src: `${directory}/${imagePath}/${imagePath}_01`,
          transformation: [
            {
              quality: 10,
              blur: 90,
            },
          ],
        })})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {};

  const mergedStyles = { ...placeholderStyle, ...inlineObjectPosition };

  return (
    <Link
      className={`relative group overflow-hidden text-white`}
      href={`/${directory}/${imagePath}`}
    >
      <Image
        src={`${directory}/${imagePath}/${imagePath}_01`}
        alt={`cover image for ${directory}/${imagePath}`}
        width={400}
        height={100}
        key={`${directory}/${imagePath}`}
        transformation={[{ focus: "custom" }]}
        className={combinedClassName}
        style={mergedStyles}
        onLoad={() => setShowPlaceholder(false)}
      />
      <div className="absolute top-8 left-8 right-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition duration-200 ease-in-out ">
        <div className="text-4xl uppercase titleFont pb-4">
          {photographyPageDetails[imagePath]?.name}
        </div>
        <p className="text-sm font-semibold">
          {photographyPageDetails[imagePath]?.year}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCover;
