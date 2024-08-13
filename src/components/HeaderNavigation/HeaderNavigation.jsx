import uploadIcon from '../../assets/images/icons/upload.svg'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import './HeaderNavigation.scss'

function HeaderNavigation() {
    return (
        <div className="nav-bar">
            <input type="text" className="nav-bar__search" name="search" placeholder="Search"/>
            <button className="nav-bar__upload">UPLOAD</button>
            <img src={avatarImage} className="nav-bar__image"/>
        </div>
    )
}

export default HeaderNavigation
