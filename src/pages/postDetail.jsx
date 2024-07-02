import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PostDetailItem from '../components/postDetailItem'

const postDetail = () => {
    const {id} = useParams()
    let [post, setPost] = useState(null)
  
    useEffect(() => {
        getPost()

    }, [id])
    
    let getPost = async () => {
        try {
            let response = await fetch(`/api/post/${id}/`)
            if (!response.ok) {
                throw new Error('Response not ok', response);
            }
            let data = await response.json()
            console.log('Post :', data);
            setPost(data)
        } catch (error) {
            console.log('Errors: ', error)
        }
    }
    
    return (
        <>
            <PostDetailItem post={post} />
        </>
    )
}

export default postDetail