import React, { useState, useEffect } from 'react'
import api from '../../api'

const Photos = ({ pictures }) => {
	return (
		<>
			{pictures && pictures.length > 0 ?
				<div className="feed pb-1">
					<div className="rounded">
						<div className="card-header">
							<div className="d-flex justify-content-between">
								<b>Photos</b>
								{pictures.length > 9 ?
									<div className="feed-icon px-2 rounded">
										<a href="">more</a>
									</div> : null
								}
							</div>
						</div>
						<div className="photo-prev">
							{pictures && pictures.map((picture, index) => (
								<img className="photos-item" key={index} src={`${api.defaults.baseURL}${picture.image}`} alt={picture.post} />
							))}
						</div>
					</div>
				</div>
			:
				<div className="feed pb-1">
					<div className="rounded">
						<div className="card-header">
							<div className="d-flex justify-content-between">
								<b>Photos</b>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Photos