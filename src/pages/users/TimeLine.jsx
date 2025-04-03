import React, {useEffect, useState} from 'react'
import '../components/css/TimeLine.css'
import PostItem from '../posts/PostItem'

const TimeLine = ({ posts, loading, error }) => {

    return (
        <div className="">
            {posts && posts.length > 0 ? posts.map(post => (
                <PostItem key={post.id} post={post} loading={loading} error={error} />
            )) :
                <div className="feed shad py-1">
                    <p align="center">No Posts to see here!</p>
                </div>
            }
        </div>
    )
}

export default TimeLine