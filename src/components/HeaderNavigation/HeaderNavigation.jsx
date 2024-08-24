import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import './HeaderNavigation.scss'

function HeaderNavigation() {
	return (
		<>
			<div className="nav-bar">
				<input type="text" className="nav-bar__search" name="search" placeholder="Search"/>
				<button type="button" className="nav-bar__upload">UPLOAD</button>
			</div>
			<img src={avatarImage} className="nav-bar__image" alt="avatar-photo"/>
		</>
	)
}

export default HeaderNavigation
