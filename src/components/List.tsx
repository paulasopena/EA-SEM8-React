import { Sub } from "../models/types";
import React, { useState, useEffect } from 'react';
import service from "../service";
import { User } from "../models/user";

interface Props {
    users: Array<User>
}   
const List= ({users}: Props) => {
  const [userss, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4002/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default List

