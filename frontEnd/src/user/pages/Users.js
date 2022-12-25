import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: 'vish',
    image: "https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png",
    places: 3
  },
  {
    id: 'u1',
    name: 'vish',
    image: "https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png",
    places: 3
  }, {
    id: 'u1',
    name: 'vish',
    image: "https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png",
    places: 3
  }
]

  return <UsersList items={USERS } />
}

export default Users