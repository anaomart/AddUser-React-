import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList , setUserList]=useState([]);
  const addUserHandler = (nName , nAge ) => {
    setUserList((prevUserList) => {
      return [...prevUserList,{name:nName,age:nAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
