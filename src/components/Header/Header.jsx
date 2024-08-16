import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'
import './Header.scss'

function Header() {
	return (
		<header className="header">
			<img src={brainflixLogo} className="header__logo"/>
			<section className="header__nav-bar">
				<HeaderNavigation />
			</section>
		</header>
	)
}

export default Header