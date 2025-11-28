import { Image } from "@imagekit/next";
import {
    ImageKitImageResponseType
} from "@/utils/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
const ImageCarousel = ({
    photos,
    index,
    setIndex,
    onClose
}: {
    photos: ImageKitImageResponseType[];
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    onClose: () => void;
}) => {
    const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
    const next = () => setIndex((i) => (i + 1) % photos.length);
    return (
        <div className="fixed inset-0 z-50 bg-white/90 flex items-center justify-center h-full">
            <button
                className="absolute top-4 right-4 text-black text-5xl cursor-pointer z-60"
                onClick={onClose}
            >
                <X />
            </button>

            <div
                className="absolute inset-y-0 left-0 w-1/4 cursor-pointer z-40 group"
                onClick={prev}
            >
                <button
                    className={`absolute rounded-full left-4 h-20 text-white font-bold text-5xl w-20 bg-zinc-300/50 duration-300 top-1/2 cursor-pointer hidden sm:block sm:opacity-0 sm:group-hover:opacity-100`}
                    onClick={prev}
                >
                    <ChevronLeft className="mx-auto h-12 w-12" />
                </button>

            </div>


            <Image
                src={photos[index].filePath}
                alt="pic"
                fill
                className=" object-contain"
            />

            <div
                className="absolute inset-y-0 right-0 w-1/4 cursor-pointer z-40 group"
                onClick={next}
            >
                <button
                    className={`absolute rounded-full right-4 h-20 text-white font-bold text-5xl w-20 bg-zinc-300/50 duration-300 top-1/2 cursor-pointer hidden sm:block sm:opacity-0 sm:group-hover:opacity-100`}
                    onClick={next}
                >
                    <ChevronRight className="mx-auto h-12 w-12" />
                </button>
            </div>

        </div>
    );
};

export default ImageCarousel;