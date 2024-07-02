import React from 'react'
import userImg from '../assets/VinX.jpg'

const groupItem = () => {
    return (
        <div className="group-feed message mb-1">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row feed-text">
                    <a >
                        <img className="rounded-circle post-group-user-img" src={userImg} />
                    </a>
                    <div className="d-flex flex-column flex-wrap mx-2">
                        <a >
                            <span className='post-group-user-img'>Vinx</span>
                        </a>
                        <p className="tx-11 m-0 icon-num groupfeed-date">Dec 18, 2023 08:54 PM</p>
                        <span className='groupfeed-group'>sent to the group 
                            <a className='groupfeed-groupname'> Sociex Networking</a>
                        </span>
                    </div>
                </div>
            </div>
            <p className="px-3 groupfeed-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nemo recusandae? Qui maxime est quas velit dicta consectetur eu molestias aut.</p>
        </div>
    )
}

export default groupItem