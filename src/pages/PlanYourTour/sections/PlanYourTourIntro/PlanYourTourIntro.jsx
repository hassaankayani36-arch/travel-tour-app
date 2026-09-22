import './PlanYourTourIntro.css';
import { useState } from 'react';
import { destinations } from '../../../../data/destinationsToursData';

function PlanYourTourIntro() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());

        console.log(values);

        if (!form.checkValidity()) {
            setError('Please complete all required fields.');
            setSubmitted(false);
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <section className="plannerPage">
            <div className="pageHeading">
                <p className="eyebrow">Design your journey</p>
                <h1>Your tour, your rhythm.</h1>
                <p>
                    Tell us what moves you. We will shape the route, stays, and experiences into a meaningful plan.
                </p>
            </div>
            <form className="plannerForm" onSubmit={handleSubmit}>
                <label>
                    I want to explore
                    <select name="destination" defaultValue="" required>
                        <option value="" disabled>
                            Choose a destination
                        </option>
                        {destinations.map((destination) => (
                            <option key={destination.name} value={destination.name}>
                                {destination.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    My travel style
                    <select name="travelStyle" defaultValue="" required>
                        <option value="" disabled>
                            Choose a style
                        </option>
                        <option value="Nature and adventure">Nature and adventure</option>
                        <option value="Family and easy pace">Family and easy pace</option>
                        <option value="Food and culture">Food and culture</option>
                    </select>
                </label>
                <label>
                    Number of travelers
                    <input name="travelers" type="number" min="1" max="20" placeholder="2" required />
                </label>
                <button type="submit">Start planning</button>
            </form>
            {error && <p className="message errorMessage">{error}</p>}
            {submitted && <p className="message">Thank you! We have received your preferences. Our team will contact you soon.</p>}
        </section>
    );
}

export default PlanYourTourIntro;
