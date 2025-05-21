"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "@imagekit/next";
import { ImageKitImageResponseType } from "@/utils/utils";

const MasonryPhotoGallery = ({ photos }: { photos: [] }) => {
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
              width={200}
              height={400}
              alt={`photo for ${photo.filePath}`}
              className="w-full"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryPhotoGallery;
