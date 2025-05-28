"use client";
import {
  fetcher,
  ImageKitImageResponseType
} from "@/utils/utils";
import { Image, buildSrc } from "@imagekit/next";
import { Key, useState } from "react";
import useSWR from "swr";
import LoadingChip from "./LoadingChip";
import ErrorChip from "./ErrorChip";

const Gallery = ({
  folderPath,
}: {
  folderPath: string;
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  // since the data is immutable (we don't really expect it to change) we don't have to worry about revalidation
  const { data, error, isLoading } = useSWR(
    `https://api.imagekit.io/v1/files?type=file&sort=ASC_NAME&path=${folderPath}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  
  
  if (!!error) {
    console.error(error);
    return <ErrorChip/>
  } 
  if (isLoading) {
    return <LoadingChip/>
  }
  if (!isLoading && !data?.length){
    return <div className="flex w-full">
        <div className="text-3xl mx-auto font-semibold ">
          Are you in the right place?
        </div>
      </div>;
  }

  return (
    <div className="space-y-6">
      {(data || []).map((photo: ImageKitImageResponseType, index: Key | null | undefined) => (

          <Image
            src={photo.filePath}
            alt="pic"
            key={index}
            width={1900}
            height={300}
            className="bg-gray-200"
            quality={90}
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
        )
    )
      }
    </div>
  );
};

export default Gallery;
