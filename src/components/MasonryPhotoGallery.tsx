"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image, buildSrc } from "@imagekit/next";
import { ImageKitImageResponseType } from "@/utils/utils";
import { useState } from "react";

const MasonryPhotoGallery = ({ photos }: { photos: [] }) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {photos.map((photo: ImageKitImageResponseType) => (
            <Image
              key={photo.filePath}
              src={photo.filePath}
              width={photo.width}
              quality={90}
              height={photo.height}
              alt={`photo for ${photo.filePath}`}
              className="w-full"
              style={
                showPlaceholder
                  ? {
                      backgroundImage: `url(${buildSrc({
                        urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT || "",
                        src: photo.filePath,
                        transformation: [
                          {
                            quality: 10,
                            blur: 90,
                          },
                        ],
                      })})`,
                    }
                  : {}
              }
              onLoad={() => setShowPlaceholder(false)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryPhotoGallery;
