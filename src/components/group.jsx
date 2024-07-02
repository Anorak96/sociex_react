import React from 'react'
import GroupItem from './groupItem'

const group = () => {
	return (
		<div className='post-group'>
			<div className='feed shad rounded groupfeed'>
				<div className="d-flex justify-content-center mb-2">
					<h6 className="card-title border-bottom p-2"><b>Your Groups</b></h6>
				</div>
				<GroupItem />
				<hr />
				<GroupItem />
				<div className="d-flex justify-content-end mb-2">
					<a href="" className="btn btn-primary">More</a>
				</div>
			</div>
		</div>
	)
}

export default group