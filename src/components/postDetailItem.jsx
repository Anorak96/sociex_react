import React from 'react'
import { FaComments, FaEye, FaHeart, FaEllipsisVertical } from 'react-icons/fa6'

const postDetailItem = ({post}) => {
	return (
		<>
			<div className="container mt-2" id="post-container">
				<div className="mx-auto">
					<div className="p-2 shad feed" id="single-post">
						<div className="d-flex flex-row justify-content-between py-1 align-items-center border-bottom">
							<div className="d-flex flex-row align-items-center feed-text px-2">
								<img className="rounded-circle post-user-img" src={`http://localhost:8000${post?.user.profile_pic}`} />
								<div className="d-flex flex-column flex-wrap mx-2">
									<div>
										<span><b>{post?.user.username}</b></span>
									</div>
									<p className="tx-11 m-0 icon-num">{post?.created_at}</p>
								</div>
							</div>
							<div className="px-2 dropdown">
								<button className="btn bottons dropdown feed-icon" type="button">
									<FaEllipsisVertical />
								</button>
							</div>
						</div>
						<div className="p-2 px-3">
							<span className="caption">{post?.caption}</span>
							<div className="post-image">
								{post?.images.map((image, index) => (
									<img className="image-item" key={index} src={`http://localhost:8000${image.image}`} alt={image.image} />
								))}
							</div>
						</div>
						<div className="d-flex justify-content-start p-1 px-4 border-top">
							<button className="btn action" id="like-button" value="" data-url=""> 
								<FaHeart />
							<span className="icon-num">{post?.likes_no}</span>
							</button>
							<div className='action'>
								<FaComments />
							<span className="icon-num">{post?.comment_no}</span>
							</div>
							<div className="action">
								<FaEye />
							<span className="icon-num black">{post?.views}</span>
							</div>
						</div>
					</div>   
				</div>
			</div>	
		</>
	)
}

export default postDetailItem