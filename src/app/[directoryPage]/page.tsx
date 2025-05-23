import PicturesLayout from "@/components/PicturesLayout";

const directoryPage = async ({ params }: {
    params: Promise<{ directoryPage: string }>
  }) => {
    const { directoryPage } = await params; 
    console.log('key, ', process.env.NEXT_IMAGEKIT_PRIVATE_KEY);
    return (
        <div>
            <PicturesLayout 
            directory={directoryPage}/>
        </div>
    );
};

export default directoryPage;