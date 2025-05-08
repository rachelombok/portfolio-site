import Image from "next/image";
import ProjectCover from "./ProjectCover";
import { directoryPagesConstants, AllowedDirectoryPages } from "@/utils/utils";

const PicturesLayout = ({ directory } : { directory: AllowedDirectoryPages } ) => {

    const pageFolders = directoryPagesConstants[directory];
    return (
        <div className="grid md:grid-cols-4 grid-cols-2">
            {pageFolders.map((path, i) => 
            (<ProjectCover imagePath={path} title='Live Event' key={i}/>)
            )}
        </div>
    );
}

export default PicturesLayout;