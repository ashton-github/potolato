import React from 'react';
import { useParams} from "react-router-dom";

const UserEdit = () => {
    let params = useParams();
    console.log(params);
    console.log(params.userId);
    let { userId } = useParams();
    console.log(userId);



    return (
        <div className="UserEdit">
            ici edit user ! :
            userid = {params.userId}

        </div>
    );
};

export default UserEdit;
