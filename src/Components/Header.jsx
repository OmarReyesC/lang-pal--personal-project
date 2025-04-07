import { NavLink, Link } from "react-router";
import ProfileIconUrl from '../assets/profile-icon.svg';

export default function Header() {

    return (
        <header className="header">
            <Link to="/" className="header__logo headline">Lang-Pal</Link>
            <nav className="header__navbar">
                <NavLink 
                    to="my-learning"
                    className={({ isActive }) =>
                        isActive ? 'active label' : 'label'
                    } 
                >
                    My learning
                </NavLink>
                <NavLink 
                    to="live-classes"
                    className={({ isActive }) =>
                        isActive ? 'active label' : 'label'
                    } 
                >
                    Live Classes
                </NavLink>
                <Link 
                    to="login"
                    className="profile-link" >
                    <img src={ProfileIconUrl} alt="Profile Icon" />
                </Link>
            </nav>
        </header>
    )
}