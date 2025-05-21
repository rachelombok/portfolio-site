const GalleryContainer = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div >
            {children}
        </div>
    )
};

export default GalleryContainer;