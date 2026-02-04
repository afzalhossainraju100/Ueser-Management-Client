import React from "react";
import { use } from "react";
import { useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);
const handleAddUser = (e) =>{
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  console.log(name,email)
  const newUser = {name, email}
  // send data to the server
  fetch('http://localhost:5000/users',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newUser),
  })
  .then(res => res.json())
  .then(data =>{
    console.log('after post', data)
    const updatedUsers = [...users, data];
    setUsers(updatedUsers); 
    e.target.reset();
  })

}
  return (
    <div>
        <div>
            <h2>User add</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
      <div>
        {
        users.map((user)=><p key={user.id}>
            {user.name} : {user.email}
            </p>)
        }
      </div>
      
    </div>
  );
};

export default Users;



// send request kobject to the server
// 1. mention method: post
// 2. mentio header: