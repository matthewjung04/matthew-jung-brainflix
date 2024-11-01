import { Link } from "react-router-dom";
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import './HeaderNavigation.scss'

function HeaderNavigation() {
	return (
		<>
			<div className="nav-bar">
				{/* Currently search bar has no functionality */}
				<input type="text" className="nav-bar__search" name="search" placeholder="Search"/>

				{/* Clicking upload button redirects to uploadpage */}
				<Link to="/upload">
					<button type="button" className="nav-bar__upload">UPLOAD</button>
				</Link>
			</div>
			<img src={avatarImage} className="nav-bar__image" alt="avatar-photo"/>
		</>
	)
}

export default HeaderNavigation
