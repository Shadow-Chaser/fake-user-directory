import React from 'react';
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const UserDetails = ({ modalIsOpen, closeModal, user }) => {
    const { name, picture, location, email, phone, cell, age } = user;


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                style={{ width: "80%" }}
            >
                <Zoom>
                    <div class="flex justify-end">
                        <button className="close-modal bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded" onClick={closeModal}>Close</button>

                    </div>
                    {/* <button className="close-modal bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded" onClick={closeModal}>Close</button> */}
                    <div className="">
                        <img src={picture.large} className='rounded-full p-4' alt="" srcset="" />
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{name.title + ' ' + name.first + ' ' + name.last}</dd>
                                </div>

                                <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{email}</dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{location.street.number + ' ' + location.street.name + ', ' + location.city + ', ' + location.state + ', ' + location.country}</dd>
                                </div>

                                <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{phone}</dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Cell</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{cell}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                </Zoom>
            </Modal>
        </div>
    );
};

export default UserDetails;