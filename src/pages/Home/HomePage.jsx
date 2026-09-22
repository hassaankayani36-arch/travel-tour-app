import { useEffect, useState } from 'react';
import HomeHero from './sections/HomeHero/HomeHero';
import { destinations } from '../../data/travelData';
import { teamMembers } from '../../data/teams';
import { customerFeedback } from '../../data/feedback';
import './HomePage.css';

function HomePage() {
    const [activeDestination, setActiveDestination] = useState(0);
    const visibleDestinations = destinations.concat(destinations).slice(activeDestination, activeDestination + 3);

    useEffect(() => {
        const slider = setInterval(() => {
            setActiveDestination((currentDestination) => (currentDestination + 1) % destinations.length);
        }, 2000);

        return () => clearInterval(slider);
    }, []);

    return (
        <main className="homePage">
            <HomeHero />
            <section className="contentSection featuredSection">
                <div className="sectionHeading">
                    <p className="eyebrow">Featured destinations</p>
                    <h2>Find your next beautiful view.</h2>
                    <p>Explore the valleys, lakes, forests, and mountain roads that make northern Pakistan unforgettable.</p>
                </div>
                <div className="tourGrid" aria-live="polite">
                    {visibleDestinations.map((destination, index) => (
                        <article className="featuredCard" key={destination.name}>
                            <img src={destination.image} alt={destination.name} />
                            <div className="cardBody">
                                <span>0{index + 1} / {destination.region}</span>
                                <h3>{destination.name}</h3>
                                <p>{destination.description}</p>
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
                        <p className="eyebrow">Travel with purpose</p>
                        <h2>Every season has a story.</h2>
                    </div>
                    <p>From quiet summer lakes to crisp winter trails, discover a different side of northern Pakistan on every visit.</p>
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
            <section className="contentSection teamSection">
                <div className="sectionHeading">
                    <p className="eyebrow">Meet the team</p>
                    <h2>The people behind your journey.</h2>
                </div>
                <div className="teamGrid">
                    {teamMembers.map((member) => (
                        <article className="teamCard" key={member.name}>
                            <img src={member.image} alt={member.name} />
                            <div className="cardBody">
                                <h3>{member.name}</h3>
                                <p className="teamRole">{member.role}</p>
                                <p>{member.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="contentSection feedbackSection">
                <div className="sectionHeading">
                    <p className="eyebrow">Customer feedback</p>
                    <h2>Stories from the road.</h2>
                </div>
                <div className="feedbackGrid">
                    {customerFeedback.map((feedback) => (
                        <article className="feedbackCard" key={feedback.name}>
                            <div className="feedbackTop">
                                <strong>{feedback.name}</strong>
                                <span>{feedback.time}</span>
                            </div>
                            <div className="stars">
                                {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                            </div>
                            <p>{feedback.review}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default HomePage;
