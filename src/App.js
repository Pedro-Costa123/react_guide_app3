import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (inputName, inputAge) => {
    setUsersList((oldList) => {
      //new user first to be on top of list
      return [
        { name: inputName, age: inputAge, id: Math.random().toString() },
        ...oldList,
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
