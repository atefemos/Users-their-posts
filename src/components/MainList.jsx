import React, { useEffect, useState } from "react";
import { getUnique } from "../utils/getUnique";
import "../sass/main.scss";
import Btn from "./Btn";
import Posts from "./Posts";
import { useHistory } from "react-router-dom";

const MainList = () => {
  const history = useHistory();

  const [list, setList] = useState([]);
  const [state, setState] = useState([{ userId: "" }]);
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  const newList = getUnique(list, "userId");

  const handleClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  };

  useEffect(() => {
    setPerson(state[0].userId);
  }, [state]);

  const handleEdit = (e) => {
    history.push({ pathname: "/edit", state: { post: e } });
  };

  return (
    <div className="container">
      <div className="container_sidebar">
        {newList.map((item) => (
          <Btn key={item.id} onClick={() => handleClick(item.userId)}>
            {" "}
            User {item.userId}
          </Btn>
        ))}
      </div>
      <div className="container_main">
        <Posts>User {person} posts</Posts>
        <hr />
        {state?.map((item, index) => (
          <Posts key={index} onClick={() => handleEdit(item)}>
            {item.title}
          </Posts>
        ))}
      </div>
    </div>
  );
};

export default MainList;
