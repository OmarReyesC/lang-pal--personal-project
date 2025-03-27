import { Outlet, NavLink } from "react-router"

export default function MyLearning() {
    return (
        <>
            <main className="my-learning__main">
                <h1 className="my-learning__title headline">My learning</h1>
                <nav className="my-learning__navbar">
                    <NavLink 
                        to='.' 
                        className="navbar-item label" 
                        end 
                    >
                        Review
                    </NavLink>
                    <NavLink 
                        to='my-classes' 
                        className="navbar-item label" 
                    >
                        My Classes
                    </NavLink>
                    <NavLink 
                        to='games' 
                        className="navbar-item label" 
                    >
                        Games
                    </NavLink>
                </nav>
                <Outlet/>
            </main>
        </>
    )
}