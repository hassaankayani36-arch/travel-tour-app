import './ToursIntro.css';
import { tours } from '../../../../data/travelData';

function ToursIntro() {
    return (
        <section className="tourPage">
            <div className="pageHeading">
                <p className="eyebrow">Curated Saiban journeys</p>
                <h1>Write your story among the mountains.</h1>
                <p className="pageDescription">
                    Every itinerary combines local knowledge, comfortable stays, and enough free time to make each place your own.
                </p>
            </div>
            <div className="tourGrid">
                {tours.map((tour, index) => (
                    <article className="tourCard" key={tour.name} style={{ backgroundImage: `url(${tour.image})` }}>
                        <p>0{index + 1} / {tour.duration}</p>
                        <div>
                            <h2>{tour.name}</h2>
                            <span>{tour.destination}</span>
                            <strong>{tour.price} <small>per person</small></strong>
                            <button type="button">View details</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ToursIntro;
