import PicturesLayout from "@/components/PicturesLayout";

const directoryPage = async ({ params }: {
    params: Promise<{ directoryPage: string }>
  }) => {
    const { directoryPage } = await params; 
    return (
        <div>
            <PicturesLayout 
            directory={directoryPage}/>
        </div>
    );
};

export default directoryPage;