import React, { useState, useEffect } from 'react'
import '../components/css/Post.css'
import api from '../../api'
import PostItem from './PostItem'
import Group from './GroupFeed'
import LoaderContainer from '../components/LoaderContainer'

const Feeds = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        api.get('api/post/feeds')
        .then(res => {
            setPosts(res.data)
            setLoading(false)
            setError("")
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
            setError(err.message)
        })
    }, [])

    return (
        <div className='grid-8-4 container mt-4'>
            {loading && <LoaderContainer />}
            {loading || error !="" || 
                <>
                    <div>
                        {posts && posts.map((post) => {
                            return(
                                <PostItem key={post.id} post={post} loading={loading} error={error} />
                            )
                        })}
                    </div>
                    <Group />
                </>
            }
            
        </div>
    )
}

export default Feeds