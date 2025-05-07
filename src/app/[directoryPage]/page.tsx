import PicturesLayout from "@/components/PicturesLayout";

const directoryPage = async ({ params }: {
    params: Promise<{ directoryPage: string }>
  }) => {
    const { directoryPage } = await params
    return (
        <div>
            Directory page route: {directoryPage}
            <PicturesLayout/>
        </div>
    );
};

export default directoryPage;