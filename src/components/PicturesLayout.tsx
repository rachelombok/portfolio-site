import Image from "next/image";

const PicturesLayout = () => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1,2,3,4,5,6,7,8].map(num => 
              <Image
              src='/awards.jpg'
              alt='test image'
              width={900}
              height={400}
              key={num}
              className="h-auto w-full"
              />  
            )}
        </div>
    );
}

export default PicturesLayout;