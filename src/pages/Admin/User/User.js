import React from 'react';
import { useNavigate } from 'react-router-dom'

const User = () => {
    let navigate = useNavigate();
    const users = [
        {
            "id": "1",
            "name": "jsmith",
            "actualName": "Jane Smith",
            "displayName": "Jane Smith (jsmith)"
        },
        {
            "id": "2",
            "name": "admin",
            "actualName": null,
            "displayName": "admin"
        },
        {
            "id": "3",
            "name": "releaser",
            "actualName": null,
            "displayName": "releaser"
        },
        {
            "id": "4",
            "name": "user",
            "actualName": null,
            "displayName": "user"
        }
    ];

    const editUser = (userId) => {
      console.log("clicked for user " + userId);
      navigate("../edit/"+userId, {replace: true})
    }

    const userList = () => users.map((user) =>
        <li>{user.name} <button onClick={() => editUser(user.id)}>Modifier</button></li>
    );


return (
        <div className="User">
            <ul>
                {userList()}
            </ul>
        </div>
    );
};

export default User;
