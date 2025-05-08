"use client"
//import Image from "next/image";
import { Image, buildSrc } from "@imagekit/next";
import Link from "next/link";
import { useState } from "react";
import { photographyPageDetails, AllowedPhotographyPageFolders } from "@/utils/utils";

type ProjectCoverProps = {
  imagePath: AllowedPhotographyPageFolders;
  title: string;
  year?: string;
  alt?: string;
  projectCoverClassName?: string;
};

const ProjectCover = ({
  imagePath,
  title,
  year = "",
  alt = "",
  projectCoverClassName = "",
}: ProjectCoverProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState<Boolean>(true);
  console.log(process.env.NEXT_PUBLIC_URL_ENDPOINT);
  return (
    <Link className="relative group overflow-hidden text-white " href={`/`}>
      <Image
        src={`${imagePath}/${imagePath}_1.jpg`}
        alt="test image"
        width={400}
        height={100}
        key={`${title}`}
        className={`w-full aspect-[4/3] hover:brightness-75 transition duration-200 ease-in-out object-cover ${projectCoverClassName}`}
        style={
          showPlaceholder
            ? {
                backgroundImage: `url(${buildSrc({
                  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT || "",
                  src: `${imagePath}/${imagePath}_1.jpg`,
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
            : {}
        }
        onLoad={() => setShowPlaceholder(false)}
      />
      <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
        <h3 className="text-5xl uppercase">{photographyPageDetails[imagePath].name}</h3>
        <p className="text-lg">2020</p>
      </div>
    </Link>
  );
};

export default ProjectCover;
