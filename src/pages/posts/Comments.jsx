import React, { useContext, useState } from 'react'
import { FaEllipsisVertical, FaTelegram } from 'react-icons/fa6'
import { Dropdown, Button, Form, Row, Col } from 'react-bootstrap'
import AuthContext from '../../utils/AuthContext'
import '../components/css/Post.css'
import api from '../../api'

const Comments = ({comments, post}) => {
    const { user } = useContext(AuthContext)
    const [newComment, setNewComment] = useState("")
    const commentData = {comment:newComment, post_id:post.id}

    function createComment(e) {
        e.preventDefault();
        api.post('api/post/feeds/comment/create/', commentData)
        .then(res => {

        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <>
            <div className="p-2 shad">
                <div className="card-header d-flex justify-content-center">
                    <b className="text-white">Comments</b>
                </div>
                    
                <div className="card-body p-1">
                    {comments && comments.length > 0 ? comments.map(comment => (
                        <div className="shad" key={comment.id}>
                            <div className="card-header d-flex justify-content-between border-bottom">
                                <div className="d-flex">
                                    <img className="rounded-circle" src={`${comment.user.profile_pic}`} style={{ height: "50px", width: "50px" }} />
                                    <div className="d-flex flex-column mx-2">
                                        <a href="">
                                            <span className='capitalizer'><b>{comment.user.username}</b></span>
                                        </a>
                                        <p className="icon-num">{comment.created}</p>
                                    </div>
                                </div>
                                {comment.user?.username === user.username ?
                                    <div className="px-2 dropdown">
                                        <Dropdown align="end" className='me-2 px-1'>
                                            <Dropdown.Toggle as="div" id="dropdown-custom">
                                                <Button className="dropdown-toggle" variant='light'>
                                                    <FaEllipsisVertical />
                                                </Button>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                                <Dropdown.Item>Update</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div> :
                                    null
                                }
                            </div>
                            <div className="card-body p-3">
                                <p className="caption">{comment.comment}</p>
                            </div>
                        </div>
                    ))	: 
                    <div className="d-flex justify-content-center align-items-center">
                        <h4 className="text-white">Be the first to comment.</h4>
                    </div>
                    }
                </div>
            </div>

            <div className="p-2 shad">
                <Form onSubmit={createComment}>
                    <Row className="align-items-center">
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={2} placeholder="Make a comment ..." name='email' value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit"><FaTelegram /></Button>
                        </Col>
                    </Row>
                </Form>
            </div> 
        </>
    )
}

export default Comments