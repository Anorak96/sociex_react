import React from 'react'
import { 
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import { FaAngleUp } from "react-icons/fa6";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostList from './pages/postList'
import PostDetail from './pages/postDetail'

const App = () => {
	return (
		<Router>
			<div className='main'>
				<Navbar />
				<Routes>
					<Route path='/' exact Component={PostList} />
					<Route path='/api/post/:id' Component={PostDetail} />
				</Routes>
				<button id="back-to-top-btn"><FaAngleUp /></button>
			</div>
		</Router>
	)
}

export default App