import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import HomePage from '../pages/Home/HomePage';
import ToursPage from '../pages/Tours/ToursPage';
import DestinationsPage from '../pages/Destinations/DestinationsPage';
import PlanYourTourPage from '../pages/PlanYourTour/PlanYourTourPage';
import TourPage from '../pages/Tour/TourPage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function AppRouter() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/tours/:slug" element={<TourPage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/plan-your-tour" element={<PlanYourTourPage />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
