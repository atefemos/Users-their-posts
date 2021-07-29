import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditPeople = () => {
  const location = useLocation();

  const [newValue, setNewValue] = useState("");

  const handleChange = (e) => {
    setNewValue({ ...newValue, [e.target.name]: e.target.value });
    console.log(newValue);
  };

  const handleCancle = () => {
    window.location.reload();
  };

  const handleSave = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${location.state.post.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(newValue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log("update successfully"));
  };

  return (
    <div className="container column">
      <label htmlFor="">Title</label>
      <textarea
        cols="80"
        rows="5"
        placeholder="title"
        className="container_input"
        required
        name="title"
        defaultValue={location.state.post.title}
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="">Body</label>
      <textarea
        cols="80"
        rows="5"
        placeholder="body"
        className="container_input"
        required
        name="body"
        defaultValue={location.state.post.body}
        onChange={handleChange}
      />
      <div className="container">
        <button className="button" onClick={handleCancle}>
          CANCLE
        </button>
        <button className="button" onClick={handleSave}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default EditPeople;
