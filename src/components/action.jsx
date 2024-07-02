import React from 'react'
import { FaComments, FaEye, FaHeart } from 'react-icons/fa6'

const action = ({post}) => {
    return (
        <div>
            <div className="d-flex justify-content-start p-1 px-4 border-top">
                <button className="btn action" id="like-button" value="" data-url=""> 
                    <FaHeart />
                <span className="icon-num">{post.likes_no}</span>
                </button>
                <div className='action'>
                    <FaComments />
                <span className="icon-num">{post.comment_no}</span>
                </div>
                <div className="action">
                    <FaEye />
                <span className="icon-num black">{post.views}</span>
                </div>
            </div>
        </div>
    )
}

export default action