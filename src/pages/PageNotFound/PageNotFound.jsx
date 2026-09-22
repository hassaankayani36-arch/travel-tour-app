import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className="notFoundPage">
            <p className="notFoundCode">404</p>
            <h1>Page not found</h1>
            <p className="notFoundMessage">
                This page does not exist. Let us get you back home.
            </p>
            <Link className="primaryButton" to="/">
                Back to home
            </Link>


        </main>
    );
}

export default PageNotFound;