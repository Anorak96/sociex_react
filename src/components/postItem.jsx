import React from 'react'
import { Link } from 'react-router-dom'
import Action from './action'

const postItem = ({ post }) => {
    return (
        <Link to={`/api/post/${post.pk}`}>
            <div className='feed shad rounded py-2'>
                <div className="d-flex flex-row justify-content-between py-1 align-items-center border-bottom">
                    <div className="d-flex flex-row align-items-center feed-text px-2">
                        <div href="">
                            <img className="rounded-circle post-user-img" src={`http://localhost:8000${post.user.profile_pic}`} />
                        </div>
                        <div className="d-flex flex-column flex-wrap mx-2">
                            <div className="post-user">
                                <span><b>{post.user.username}</b></span>
                            </div>
                            <p className="tx-11 m-0 icon-num">{post.created_at}</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 px-3">
                    <span className='caption'>{post.caption}</span>
                    <div className="post-image">
                        {post.images.map((image, index) => (
                            <img className="image-item" key={index} src={`http://localhost:8000${image.image}`} alt={image.image} />
                        ))}
                    </div>
                </div>
                <Action post={post} />
            </div>
        </Link>
    )
}

export default postItem