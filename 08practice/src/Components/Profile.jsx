import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <div>Nope phirse aao</div>;

    return <div>Welcome {user.nme}</div>;
}

export default Profile;
