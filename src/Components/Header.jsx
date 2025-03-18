import { NavLink, Link } from "react-router";
import ProfileIconUrl from '../assets/profile-icon.svg';

export default function Header() {
    return (
        <header className="header">
            <Link className="header__logo headline">Lang-Pal</Link>
            <nav className="header__navbar">
                <NavLink className="label" >My learning</NavLink>
                <NavLink className="label" >Live Classes</NavLink>
                <Link className="profile-link" >
                    <img src={ProfileIconUrl} alt="Profile" />
                </Link>
            </nav>
        </header>
    )
}