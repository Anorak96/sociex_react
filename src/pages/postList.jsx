import React, {useState, useEffect} from 'react'
import PostItem from '../components/postItem'
import Group from '../components/group'

const postList = () => {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()

    }, [])

    let getPosts = async () => {
        try {
            let response = await fetch('/api/post/')
            if (!response.ok) {
                throw new Error('Response not ok', response);
            }
            let data = await response.json()
            console.log('Posts :', data);
            setPosts(data)
        } catch (error) {
            console.log('Error: ', error)
        }
	}
	
	return (
        <div>
            <div className='grid-8-4 container'>
                <div>
                    {posts.map((post, index) => {
                        return(<PostItem key={index} post={post} />)
                    })}
                </div>
                <Group />
            </div>
		</div>
	)
}

export default postList