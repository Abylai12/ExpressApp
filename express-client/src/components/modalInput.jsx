import React, { useState } from "react";

const ModalInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [position, setPosition] = useState("");

  const submit = () => {
    const user = [
      {
        name: name,
        email: email,
        imgUrl: imgUrl,
        position,
        position,
      },
    ];
  };

  return (
    <div>
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
    </div>
  );
};

export default ModalInput;
