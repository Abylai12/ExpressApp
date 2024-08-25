import React, { useEffect, useState } from "react";

const Reduce = () => {
  // const arr = [
  //   { id: 1, name: "Alice" },
  //   { id: 5, name: "Bob" },
  //   { id: 3, name: "Charlie" },
  //   { id: 10, name: "David" },
  // ];

  // const maxId = arr.reduce((max, user) => {
  //   console.log(`Current max: ${max}, Current user ID: ${user}`);
  //   return user.id > max ? user.id : max;
  // }, 0);

  // console.log("Final max ID:", maxId);
  const [mood, setMood] = useState(false);
  const [sent, useSent] = useState(false);
  const showModal = (thing) => {
    thing ? useSent(true) : useSent(false);
    setMood(true);
  };
  const closeModal = () => {
    setMood(false);
  };
  // const editModal = () => {
  //   showModal();
  //   useSent(false);
  // };

  const submitValue = () => {
    sent ? console.log("POST") : console.log("PUT");
    setMood(false);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          showModal();
        }}
      >
        open modal
      </button>
      <button
        className="btn"
        onClick={() => {
          showModal("hi");
        }}
      >
        edit modal
      </button>

      {mood && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={submitValue}>
                  submit
                </button>
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Reduce;
