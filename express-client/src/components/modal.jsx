import { useState, useEffect } from "react";

const Modal = ({ getUsersData }) => {
  const [open, setOpen] = useState(false);
  const [sent, useSent] = useState(false);

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
  // const [form, setForm] = useState({
  //   name: "",
  //   email: ""
  // })

  const postData = async () => {
    const newEmployee = {
      name: name,
      email: email,
      imgUrl: imgUrl,
      jobTitle: position,
    };

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
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
    setName("");
    setEmail("");
    setImgUrl("");
    setPosition("");
    useSent(!sent);
  };
  useEffect(() => {
    getUsersData();
  }, [sent]);
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
              <button className="btn" onClick={postData}>
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
