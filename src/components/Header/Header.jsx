import { Link } from "react-router-dom";
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'
import './Header.scss'

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img src={brainflixLogo} className="header__logo" alt="avatar-image"/>
			</Link>
			
			<section className="header__nav-bar">
				<HeaderNavigation />
			</section>
		</header>
	)
}

export default Header