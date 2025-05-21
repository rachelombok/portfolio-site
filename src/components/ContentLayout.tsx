import TransitionPageWrapper from "./TransitionPageWrapper";
const ContentLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div className="md:w-[70vw] w-[80vw] m-auto">
         <TransitionPageWrapper>
         {children}
         </TransitionPageWrapper>
           
        </div>
    )
};

export default ContentLayout;