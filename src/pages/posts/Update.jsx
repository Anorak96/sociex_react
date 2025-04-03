import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AuthContext from '../../utils/AuthContext'
import api from '../../api'
import { Form, Button } from 'react-bootstrap'
import '../components/css/Post.css'

const Update = () => {
    const getGridClass = (count) => `grid-${Math.min(count, 4)}`;
    const navigate = useNavigate()
    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const [post, setPost] = useState([])
    const [caption, setCaption] = useState([])

    const newPost = {caption: caption}

    useEffect(() => {
        api.get(`api/post/feeds/post/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => [
            console.log(err.message)
        ])
    }, [])

    function updatePost(){
        console.log("Updating Post")
        api.patch(`api/post/feeds/post/${id}/update`, newPost)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
        navigate(`/post/${id}`)
    }

    return (
        <>
            {user?.username === post.user?.username ? (
                <div className='container-fluid'>
                    <div className="card mb-4">
                        <div className="card-header">Post Details</div>
                        <div className="card-body">
                            <Form onSubmit={updatePost}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Caption</Form.Label>
                                    <Form.Control type="text" placeholder={post.caption} autoFocus value={caption} onChange={(e) => setCaption(e.target.value)}/>
                                </Form.Group>
                                <div className={`update-post-image ${getGridClass(post?.post_images?.length || 1)}`}>
                                    {post && post.post_images && post.post_images.map((image, index) => (
                                        <img className="update-image-item" key={index} src={`${api.defaults.baseURL}${image.image}`} alt={image.image} />
                                    ))}
                                </div>

                                <Form.Group controlId="exampleForm.ControlInput3" className="mb-3">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>

                                <Button className="btn bottons mx-2" type="submit" variant='success'>Save changes</Button>
                                <Button variant='danger'>Cancel</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            ) : (
               <></>
            )}

        </>
    )
}

export default Update