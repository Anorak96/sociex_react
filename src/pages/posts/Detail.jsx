import React, { useEffect, useState } from 'react'
import '../components/css/Post.css'
import { useParams } from 'react-router-dom'
import api from '../../api'
import PostItem from './PostItem'
import Loader from '../components/Loader'
import Comments from './Comments'

const Detail = () => {
    
	const {id} = useParams()
	const [post, setPost] = useState([])
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	useEffect(() => {
		setLoading(true)
		api.get(`api/post/feeds/post/${id}`)
		.then(res => {
			setPost(res.data)
			setLoading(false)
			setError("")
        })
        .catch(err => {
            console.log(err.message)
			setLoading(false)
			setError(err.message)
        })

		api.get(`api/post/feeds/post/${id}/comment`)
		.then(res => {
			setComments(res.data)
			setLoading(false)
			setError("")
        })
        .catch(err => {
            console.log(err.message)
			setLoading(false)
			setError(err.message)
        })
	}, [id])

    return (
		<div className='container'>
            {loading && <Loader />}
			{loading || error !="" || 
				<>
					<PostItem post={post} loading={loading} error={error} />
					<Comments comments={comments}  post={post}/>
							
				</> 
			}
		</div>
    ) 
}

export default Detail