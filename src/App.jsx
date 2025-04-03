import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {AuthProvider} from './utils/AuthContext'
import PrivateRoute from './utils/PrivateRoute'
import Home from './pages/Home/Home'
import Feeds from './pages/posts/Feeds'
import Detail from './pages/posts/Detail'
import Login from './pages/users/Login'
import Signup from './pages/users/Signup'
import Profile from './pages/users/Profile'
import Chat from './pages/chats/Chat'
import './App.css'
import Update from './pages/posts/Update'
import UpdateProfile from './pages/users/UpdateProfile'

function App() {

	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} >
						<Route index element={<Feeds />} />
						<Route path='/post/:id' element={<Detail />} />
						<Route path='/post/:id/update' element={<Update />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/profile/:username' element={<Profile />} />
						<Route path='/profile/:username/update' element={<UpdateProfile />} />
						<Route path='/chat' element={<Chat />} />
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	)
}

export default App
