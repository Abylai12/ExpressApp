import { useState, useEffect } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [position, setPosition] = useState("");

  //   const submit = () => {
  //     const user = [
  //       {
  //         name: name,
  //         email: email,
  //         imgUrl: imgUrl,
  //         position,
  //         position,
  //       },
  //     ];
  //     closeModal();
  //     console.log(user);
  //   };
  const submit = async () => {
    const user = {
      name: name,
      email: email,
      imgUrl: imgUrl,
      jobTitle: position,
    };

    try {
      const response = await fetch("http://localhost:8000/users/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("User added successfully");
        closeModal();
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button className="btn btn-info" onClick={showModal}>
        Add employee
      </button>
      {open && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Daisy"
                  onChange={(el) => setName(el.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="daisy@site.com"
                  onChange={(el) => setEmail(el.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Image"
                  onChange={(el) => setImgUrl(el.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Position"
                  onChange={(el) => setPosition(el.target.value)}
                />
              </label>
            </p>
            <div className="modal-action">
              <button className="btn" onClick={submit}>
                Submit
              </button>
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default Modal;
