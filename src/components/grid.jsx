import React from 'react'
import PostList from '../pages/postList'
import Group from './group'

const grid = () => {
    return (
        <div className='grid-8-4 container'>
            <PostList />
            <Group />
        </div>
    )
}

export default grid