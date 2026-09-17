import './DestinationsIntro.css';
import { destinations } from '../../../../data/travelData';

function DestinationsIntro() {
    return (
        <section className="destinationsIntro">
            <div className="destinationsIntro__heading">
                <p className="destinationsIntro__eyebrow">The northern Pakistan atlas</p>
                <h1>Landscapes that stay with you.</h1>
                <p className="destinationsIntro__description">
                    From the quiet of Hunza to the green valleys of Swat, choose your next escape by the feeling you want to find.
                </p>
            </div>
            <div className="destinationsIntro__grid">
                {destinations.map((destination, index) => (
                    <article className="destinationTile" key={destination.name} style={{ backgroundImage: `url(${destination.image})` }}>
                        <span>0{index + 1} / {destination.region}</span>
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                    </article>
                ))}
            </div>
            <div className="destinationTools">
                <div>
                    <p className="destinationsIntro__eyebrow">Live route map</p>
                    <h2>See your direction before you go.</h2>
                    <iframe title="Northern Pakistan destinations map" src="https://www.openstreetmap.org/export/embed.html?bbox=70.9%2C33.9%2C77.7%2C37.9&amp;layer=mapnik" />
                </div>
            </div>
        </section>
    );
}

export default DestinationsIntro;
