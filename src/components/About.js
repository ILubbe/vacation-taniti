import React from "react";
import '../App.css';

function About() {
    return (
        <div className="cont">
            <div className="box text-box">
                <h1>Welcome to Taniti: Your Tropical Paradise</h1>
                <p>
                    &emsp;Discover the allure of Taniti, a breathtaking tropical island in the Pacific,
                    where paradise truly comes alive. Spanning less than 500 square miles,
                    Taniti boasts pristine sandy beaches, rugged rocky shores, lush rainforests,
                    and a majestic active volcano. Immerse yourself in its vibrant culture,
                    with a close-knit community of 20,000 welcoming you to experience a blend
                    of traditional fishing, agriculture, and burgeoning tourism.
                    From relaxing on white sands at Yellow Leaf Bay to thrilling rainforest zip-lining
                    and scenic volcano hikes, every corner of Taniti offers unforgettable adventures.
                </p>
                <p>
                    &emsp;Savor diverse culinary delights from local fish and rice to American and Pan-Asian
                    cuisines across ten charming restaurants. Choose from a range of accommodations,
                    including cozy hostels, family-owned hotels, and luxury resorts, all meticulously regulated
                    for your comfort. With seamless travel options, including a small but expanding airport,
                    public buses, and rental cars, exploring Taniti is effortless. Enjoy a safe, culturally rich
                    environment with modern conveniences and minimal crime. Welcome to Taniti, where every moment
                    is a step into your dream tropical getaway.
                </p>
            </div>
            <div className="box image-box">
                <img src="images/luxuryResort.jpg" alt=""/>
            </div>
        </div>
    )
}

export default About;