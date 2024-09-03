import React, { useState } from 'react';
import './BookNow.css';

const Book = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        travelDate: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const today = new Date();
        const travelDate = new Date(formData.travelDate);
        const returnDate = new Date(formData.returnDate);

        if (returnDate < travelDate) {
            alert('Return date must be later than travel date.');
            return;
        }

        if (travelDate < today) {
            alert('Travel date cannot be in the past.');
            return;
        }

        alert(`Your information has been recieved.\nPlease check email: ${formData.email} to finish your booking.`);
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            travelDate: '',
            returnDate: '',
            comment: ''
        });
        console.log('Form data:', formData);
        return;
    };

    return (
        <div className="book-now">
            <h1>Book Your Trip to Taniti</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="123-456-7890"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="JohnDoe@hotmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="travelDate">Travel Date</label>
                    <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="returnDate">Return Date</label>
                    <input
                        type="date"
                        id="returnDate"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="Place any additional information you would like us to know about here."
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Book;
