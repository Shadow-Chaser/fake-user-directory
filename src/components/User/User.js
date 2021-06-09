import React, { useState } from 'react';
import UserDetails from '../UserDetails/UserDetails';

const User = (props) => {
    const { name, picture } = props.user;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="">
            <div class="container mx-4 my-4 ">
                <div class="w-64 border">
                    <img src={picture.large} class="w-full" alt="..." />
                    <div class="p-4">
                        <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 ">{name.title + ' ' + name.first + ' ' + name.last}</h5>
                        <button onClick={() => openModal()} class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Get Details</button>
                    </div>
                </div>
            </div>

            <UserDetails modalIsOpen={modalIsOpen} user={props.user} closeModal={closeModal}>></UserDetails>
        </div>
    );
};

export default User;