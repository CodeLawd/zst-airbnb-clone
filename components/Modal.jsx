import { footerLink } from "../helpers/data";

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <label htmlFor="my-modal-6" className="modal modal-bottom">
        <label htmlFor="my-modal-6" className="modal-box relative">
          <label htmlFor="my-modal-6" className="absolute left-8 top-8 text-lg text-black cursor-pointer">
            ✕
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-[95%] lg:max-w-[90%] mx-auto py-10">
            {footerLink?.map((links, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold mb-4"> {links.heading} </h3>
                <div className="flex flex-col gap-4 text-sm">
                  {links.list?.map((list, id) => (
                    <p key={id} className="hover:underline cursor-pointer text-gray-500">
                      {list}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </label>
      </label>
    </>
  );
};

export default Modal;
