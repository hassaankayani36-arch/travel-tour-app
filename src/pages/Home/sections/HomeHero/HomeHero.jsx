import './HomeHero.css';

function HomeHero() {
    return (
        <section className="homeHero">
            <div className="homeHero__content">
                <p className="homeHero__eyebrow">Saiban Tours & Travels / Pakistan</p>
                <h1>Where the mountains end, the stories begin.</h1>
                <p className="homeHero__description">
                    Thoughtfully planned journeys through northern Pakistan, led by locals and shaped by experiences you cannot find on a map.
                </p>
                <div className="homeHero__actions">
                    <a className="homeHero__primaryAction" href="/tours">
                        Explore tours
                    </a>
                    <a className="homeHero__secondaryAction" href="/plan-your-tour">
                        Plan your tour
                    </a>
                </div>
            </div>
            <div className="homeHero__stamp" aria-hidden="true">
                <span>Start</span>
                <strong>Here</strong>
            </div>
        </section>
    );
}

export default HomeHero;
