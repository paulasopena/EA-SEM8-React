import { Sub } from "../models/types"
import React, { useEffect, useState } from 'react';
import service from "../service";

function MyComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    service.getUsers()
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.name}>{user.surname}</li>
        ))}
      </ul>
    </div>
  );
}

