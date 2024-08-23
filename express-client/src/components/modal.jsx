import { useState, useEffect } from "react";

const Modal = ({
  getUsersData,
  showModal,
  closeModal,
  open,
  setForm,
  form,
  taskId,
  type,
  setOpen,
}) => {
  const [error, setError] = useState("");
  const [sent, useSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitValue = () => {
    type ? postEmployerData() : updateEmployerData();
    setOpen(false);
  };

  const postEmployerData = async () => {
    const { name, email, imgUrl, jobTitle } = form;

    // Validation: Check if any field is empty
    if (!name || !email || !imgUrl || !jobTitle) {
      setError("Please fill out all fields before submitting.");
      console.log(error);
      return; // Stop the function if any field is empty
    }

    setError(""); // Clear error message if all fields are filled

    const newEmployee = {
      name,
      email,
      imgUrl,
      jobTitle,
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
    setForm({
      name: "",
      email: "",
      imgUrl: "",
      jobTitle: "",
    });
    useSent(!sent);
  };
  const updateEmployerData = async () => {
    const { name, email, imgUrl, jobTitle } = form;

    if (!name || !email || !imgUrl || !jobTitle) {
      setError("Please fill out all fields before submitting.");
      console.log(error);
      return; // Stop the function if any field is empty
    }

    setError(""); // Clear error message if all fields are filled
    try {
      const response = await fetch(`http://localhost:8000/users/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("User deleted successfully");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    closeModal();
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
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="email"
                  className="grow"
                  name="email"
                  placeholder="daisy@site.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Image"
                  name="imgUrl"
                  value={form.imgUrl}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Position"
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                />
              </label>
            </p>
            <div className="modal-action">
              <button className="btn" onClick={submitValue}>
                Submit
              </button>
              {/* <button className="btn" onClick={updateEmployerData}>
                update
              </button> */}
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
