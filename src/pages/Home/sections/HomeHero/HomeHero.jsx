import { useEffect, useState } from 'react';
import { destinations } from '../../../../data/travelData';
import './HomeHero.css';

function HomeHero() {
    const [activeImage, setActiveImage] = useState(0);
    const heroImages = destinations.slice(0, 4).map((destination) => destination.image);

    useEffect(() => {
        const slider = setInterval(() => {
            setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
        }, 2000);

        return () => clearInterval(slider);
    }, [heroImages.length]);

    const showNextImage = () => {
        setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    };

    const showPreviousImage = () => {
        setActiveImage((currentImage) => (currentImage - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <section
            className="hero"
            style={{ backgroundImage: `linear-gradient(rgba(23, 60, 58, .72), rgba(23, 60, 58, .72)), url(${heroImages[activeImage]})` }}
        >
            <div className="heroContent">
                <p className="eyebrow">Saiban Tours & Travels / Pakistan</p>
                <h1>Where the mountains end, the stories begin.</h1>
                <p className="heroDescription">
                    Thoughtfully planned journeys through northern Pakistan, led by locals and shaped by experiences you cannot find on a map.
                </p>
                <div className="heroActions">
                    <a className="primaryButton" href="/tours">
                        Explore tours
                    </a>
                    <a className="secondaryButton" href="/plan-your-tour">
                        Plan your tour
                    </a>
                </div>
            </div>
            <div className="heroControls">
                <button type="button" onClick={showPreviousImage} aria-label="Show previous image">&larr;</button>
                <span>{activeImage + 1} / {heroImages.length}</span>
                <button type="button" onClick={showNextImage} aria-label="Show next image">&rarr;</button>
            </div>
            <div className="heroStamp" aria-hidden="true">
                <span>Travel</span>
                <strong>Further</strong>
            </div>
        </section>
    );
}

export default HomeHero;
