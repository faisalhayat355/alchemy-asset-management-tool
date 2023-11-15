"use client"
import React, { useEffect, useState } from "react";
import ListItemComponent from './ListItem'
import axios from "axios";

const page = () => {
  const [users, setUsers] = useState ([]);
  const [error, setError] = useState ([]);

  useEffect(() => {
    axios .get("http://localhost:8000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);  
  return (
    <div>
      <ListItemComponent users={users}/>
    </div>
  )
}

export default page
