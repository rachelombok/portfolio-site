
const ErrorChip = ({ customClassName = '' }: { customClassName?: string }) => {
    return (
        <div className={`flex bg-red-300 w-full h-16 rounded-lg border border-2 border-red-400 ${customClassName}`}>
        <div className="text-xl m-auto font-semibold text-gray-50">
          There was an error, please try again later.
        </div>
      </div>
    );
};

export default ErrorChip;
