import Link from "next/link";

const SmallNavDirectory = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed inset-0 z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full h-screen">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start flex-col">
                <div className="space-y-8 text-center sm:mx-auto my-6">
                  <Link
                    href="/concerts"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                    
                      Concerts
                   
                  </Link>
                  <Link
                    href="/portraits"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                    
                      Portaits
                    
                  </Link>
                  <Link
                    href="/street"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                    
                      Street
                   
                  </Link>
                  <Link
                    href="/film"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                    
                      Film
                   
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                      Events
                    
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                      About
                   
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-semibold text-gray-900  uppercase"
                  >
                      Contact
                  
                  </Link>
                </div>

                <button
                  className="mx-auto flex size-12 shrink-0 items-center justify-center sm:mx-2 sm:size-8 text-gray-500 "
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    height="48px"
                    width="48px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 460.775 460.775"
                    xmlSpace="preserve"
                    className="size-full"
                  >
                    <path stroke="currentColor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNavDirectory;
