import { Link } from "react-router-dom";
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'
import './Header.scss'

/* Header for all pages */
function Header() {
	return (
		<header className="header">
			{/* BrainFlix Logo */}
			<Link to="/">
				{/* Cliking on logo redirects to homepage */}
				<img src={brainflixLogo} className="header__logo" alt="avatar-image"/>
			</Link>
			
			{/* Navigation section: search bar, upload button, avatar image */}
			<section className="header__nav-bar">
				<HeaderNavigation />
			</section>
		</header>
	)
}

export default Header