import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg'
import './Header.css'

function Header () {
    return (
        <header className="header">
            <img src={brainflixLogo} className="header__logo"/>
        </header>
    )
}

export default Header