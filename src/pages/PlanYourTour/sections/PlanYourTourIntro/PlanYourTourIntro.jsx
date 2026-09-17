import './PlanYourTourIntro.css';
import { useState } from 'react';
import { destinations } from '../../../../data/travelData';

function PlanYourTourIntro() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setError('Please complete all required fields.');
            setSubmitted(false);
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <section className="planYourTourIntro">
            <div className="planYourTourIntro__heading">
                <p className="planYourTourIntro__eyebrow">Design your journey</p>
                <h1>Your tour, your rhythm.</h1>
                <p>
                    Tell us what moves you. We will shape the route, stays, and experiences into a meaningful plan.
                </p>
            </div>
            <form className="tourPlanner" onSubmit={handleSubmit}>
                <label>
                    I want to explore
                    <select defaultValue="" required>
                        <option value="" disabled>
                            Choose a destination
                        </option>
                        {destinations.map((destination) => <option key={destination.name}>{destination.name}</option>)}
                    </select>
                </label>
                <label>
                    My travel style
                    <select defaultValue="" required>
                        <option value="" disabled>
                            Choose a style
                        </option>
                        <option>Nature and adventure</option>
                        <option>Family and easy pace</option>
                        <option>Food and culture</option>
                    </select>
                </label>
                <label>
                    Number of travelers
                    <input type="number" min="1" max="20" placeholder="2" required />
                </label>
                <button type="submit">Start planning</button>
            </form>
            {error && <p className="plannerMessage plannerMessage--error">{error}</p>}
            {submitted && <p className="plannerMessage">Thank you! We have received your preferences. Our team will contact you soon.</p>}
        </section>
    );
}

export default PlanYourTourIntro;
