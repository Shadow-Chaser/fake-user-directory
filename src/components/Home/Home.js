import React, { useEffect, useState } from 'react';
import User from '../User/User'
const Home = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50&nat=us')
            .then(res => res.json())
            .then(data => setUserData(data.results))
    }, [])

    console.log(userData);
    return (
        <>
            <h1 className="text-4xl font-black	text-center	p-4"><u>Fake User Directory</u></h1>
            <br />
            <div class='flex flex-wrap -mx-2 overflow-hidden xl:-mx-1 justify-center'>
                {
                    userData.map(user => <User user={user} ></User>)
                }

            </div>
        </>
    );
};

export default Home;