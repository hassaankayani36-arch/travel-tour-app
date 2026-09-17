import './HomeHero.css';

function HomeHero() {
    return (
        <section className="hero">
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
            <div className="heroStamp" aria-hidden="true">
                <span>Start</span>
                <strong>Here</strong>
            </div>
        </section>
    );
}

export default HomeHero;
