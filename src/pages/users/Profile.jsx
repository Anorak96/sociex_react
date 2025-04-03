import React, { useState, useEffect } from 'react'
import '../components/css/Profile.css'
import { useParams } from 'react-router-dom'
import Header from './ProfileHead'
import api from '../../api'
import TimeLine from './TimeLine'
import Aside from './Aside'
import Photos from './Photos'

const Profile = () => {
	const username = useParams()

	const [profile, setProfile] = useState([])
	const [posts, setPosts] = useState([])
	const [pictures, setPictures] = useState([])
	const [follows, setFollows] = useState([])
	const [loading, setLoading] = useState(false)
	const [suggests, setSuggests] = useState([])
	const [error, setError] = useState("")

	useEffect(() => {
		setLoading(true)
		api.get(`api/user/${username.username}`)
		.then(res => {
			setProfile(res.data)
			setPosts(res.data.posts)
			setPictures(res.data.photos)
			setFollows(res.data.following)
			setSuggests(res.data.suggest_user)
			setLoading(false)
			setError("")
		})
		.catch(err => {
			console.log(err.message)
			setLoading(false)
			setError(err.message)
		})
	}, [username])

	return (
		<>
			<Header profile={profile} />
			<section className="container-fluid user-grid">
				<Aside follows={follows} suggests={suggests} />
            	<TimeLine posts={posts} loading={loading} error={error}/>
				<Photos pictures={pictures} />
			</section>
		</>
	)
}

export default Profile