import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className="pageNotFound">
            <p className="pageNotFound__code">404</p>
            <h1>Page not found</h1>
            <p className="pageNotFound__message">
                This page does not exist. Let us get you back home.
            </p>
            <Link className="pageNotFound__link" to="/">
                Back to home
            </Link>



        </main>
    );
}

export default PageNotFound;