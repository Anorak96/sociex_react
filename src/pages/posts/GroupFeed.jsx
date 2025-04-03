import React, { useState, useEffect } from 'react'
import '../components/css/Group.css'
import api from '../../api'
import { Link } from 'react-router-dom'

const Group = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        api.get('api/post/feeds/group')
        .then(res => {
            setMessages(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className='post-group'>
			<div className='feed shad rounded'>
				<div className="d-flex justify-content-center mb-2">
					<h6 className="card-title border-bottom p-2"><b>Your Groups</b></h6>
				</div>
                {messages && messages.map((message, index) => (
                    <div className="group-feed message mb-2" key={index}>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-row feed-text">
                                <Link >
                                    <img className="rounded-circle group-user-img" src={`${api.defaults.baseURL}${message.user.profile_pic}`}/>
                                </Link>
                                <div className="d-flex flex-column flex-wrap mx-2">
                                    <Link >
                                        <span className='group-user'>{message.user.username}</span>
                                    </Link>
                                    <p className="tx-11 m-0 icon-num group-date">{message.created}</p>
                                    <span style={{ fontSize: "14px" }}>sent to the group 
                                        <Link className='group-name'> {message.room.name}</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="px-3 group-message">{message.body}</p>
                    </div>
                ))}
				<div className="d-flex justify-content-end mb-2 border-top pt-2">
					<a href="" className="btn btn-primary">More</a>
				</div>
			</div>
		</div>
    )
}

export default Group