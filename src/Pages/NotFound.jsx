import { Link } from "react-router";

export default function NotFound() {
    return (
        <main className="not-found-main">
            <h1 className="headline">Sorry. The page you were looking for was not found.</h1>
            <Link 
                to='/'
                className="label primary-button"
            >
                Return to main Page
            </Link>
        </main>
    )
}