const Modal = ({
  showModal,
  closeModal,
  openModal,
  handleChange,
  form,
  submitValue,
}) => {
  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => {
          showModal();
        }}
      >
        Add employee
      </button>
      {openModal && (
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
