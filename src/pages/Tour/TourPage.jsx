import { Link, useParams } from 'react-router-dom';
import { tours } from '../../data/destinationsToursData';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import PageNotFound from '../PageNotFound/PageNotFound';
import './TourPage.css';

function TourPage() {
    const { slug } = useParams();
    const tour = tours.find((item) => item.slug === slug);

    if (!tour) {
        return <PageNotFound />;
    }

    return (
        <main className="tourDetailPage">
            <Link className="backToTours" to="/tours">&larr; Back to tours</Link>
            <section className="tourDetailHero">
                <div className="tourDetailHeroImage" style={{ backgroundImage: `url(${tour.image})` }} />
                <div className="tourDetailIntro">
                    <p className="eyebrow">Curated journey / {tour.duration}</p>
                    <h1>{tour.name}</h1>
                    <p className="tourDetailDestination">{tour.destination}</p>
                    <p className="tourDetailDescription">{tour.description}</p>
                    <strong className="tourDetailPrice">{tour.price} <small>per person</small></strong>
                </div>
            </section>

            <section className="tourImageStrip">
                {tour.images.map((image, index) => (
                    <img key={image} src={image} alt={`${tour.destination} view ${index + 1}`} />
                ))}
            </section>

            <div className="tourDetailGrid">
                <section className="itinerarySection">
                    <p className="eyebrow">The rhythm of the trip</p>
                    <h2>Itinerary</h2>
                    <div className="itineraryList">
                        {tour.itinerary.map((item) => (
                            <article className="itineraryItem" key={`${item.day}-${item.time}`}>
                                <p>{item.day}</p>
                                <div>
                                    <span>{item.time}</span>
                                    <h3>{item.activity}</h3>
                                    <strong>{item.place}</strong>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <aside className="tourWidgets">
                    <div className="widgetPlaceholder">
                        <WeatherCard locationName={tour.weatherLocation} />
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default TourPage;
