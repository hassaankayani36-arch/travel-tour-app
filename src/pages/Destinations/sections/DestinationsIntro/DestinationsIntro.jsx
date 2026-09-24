import './DestinationsIntro.css';
import { destinations } from '../../../../data/destinationsToursData';
import MapComponent from '../../../../components/MapComponent';
import { useState } from 'react';

function DestinationsIntro() {
    const [selectedDestination, setSelectedDesination] = useState(null)

    return (
        <section className="destinationPage">
            <div className="pageHeading">
                <p className="eyebrow">The northern Pakistan atlas</p>
                <h1>Landscapes that stay with you.</h1>
                <p className="pageDescription">
                    From the quiet of Hunza to the green valleys of Swat, choose your next escape by the feeling you want to find.
                </p>
            </div>
            <div className="destinationGrid">
                {destinations.map((destination, index) => (
                    <article className="destinationCard" key={destination.name} style={{ backgroundImage: `url(${destination.image})` }} onClick={() => { setSelectedDesination(destination.coordinates) }}>
                        <span>{destination.id} / {destination.region}</span>
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                    </article>
                ))}
            </div>
            {/* {console.log(selectedDestination)} */}
            <MapComponent selectedDestination={selectedDestination} />
        </section>
    );
}

export default DestinationsIntro;
