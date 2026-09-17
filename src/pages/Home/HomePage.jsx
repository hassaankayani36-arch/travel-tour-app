import HomeHero from './sections/HomeHero/HomeHero';
import { destinations, tours } from '../../data/travelData';
import './HomePage.css';

function HomePage() {
    return (
        <main className="homePage">
            <HomeHero />
            <section className="contentSection featuredSection">
                <div className="sectionHeading">
                    <p className="eyebrow">Featured journeys</p>
                    <h2>Every route has a story to tell.</h2>
                    <p>Small groups, local guides, and moments that stay with you long after the camera is packed away.</p>
                </div>
                <div className="tourGrid">
                    {tours.map((tour, index) => (
                        <article className="tourCard" key={tour.name}>
                            <img src={tour.image} alt={tour.name} />
                            <div className="cardBody">
                                <span>0{index + 1} / {tour.duration}</span>
                                <h3>{tour.name}</h3>
                                <p>{tour.destination}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="contentSection togetherSection">
                <p className="eyebrow">Let's go together</p>
                <h2>Do not just see Pakistan. Feel it.</h2>
                <a className="primaryButton" href="/plan-your-tour">Start your journey</a>
            </section>
            <section className="contentSection">
                <div className="sectionHeading headingRow">
                    <div>
                        <p className="eyebrow">Today in the mountains</p>
                        <h2>Check the skies before you go.</h2>
                    </div>
                    <p>Live updates from Open-Meteo. Data refreshes on every visit.</p>
                </div>
            </section>
            <section className="contentSection gallerySection">
                <div className="sectionHeading">
                    <p className="eyebrow">A glimpse of the journey</p>
                    <h2>Views that call you back.</h2>
                </div>
                <div className="gallery">
                    {destinations.slice(0, 4).map((destination) => <img key={destination.name} src={destination.image} alt={destination.name} />)}
                </div>
            </section>
            <section className="contentSection peopleSection">
                <div>
                    <p className="eyebrow">Who we are</p>
                    <h2>Local hearts, open horizons.</h2>
                    <p>The Saiban team calls northern Pakistan home. That is why we offer more than a route; we create a genuine connection to each place.</p>
                </div>
                <blockquote>“Traveling through Hunza with Saiban felt less like a tour and more like visiting a friend.”<cite>— Areeba, Lahore</cite></blockquote>
            </section>
        </main>
    );
}

export default HomePage;
