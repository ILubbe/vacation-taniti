import React from "react";
import '../App.css';

function Transport () {
    return (
        <div>
            <h1 className='subpageHeader'>Transportation</h1>
            <div className="cont">
                <div className="box text-box">
                    <h1>Bicycle Rentals</h1>
                    <p>
                        <strong className="str">Pedal Power Rentals - </strong>Pedal Power Rentals offers
                        affordable bicycle rentals with a wide range of options, from standard bikes to premium
                        models.<i className="italics"> Enjoy a 10% discount on your first rental by using the
                        code PEDAL10 in store!</i>
                    </p>
                    <li><strong>Phone Number:</strong> +1-555-234-5678</li>
                    <li><strong>Address:</strong> 56 Bike Lane, Taniti</li>
                    <p>
                        <strong className="str">Taniti Cycle Shop - </strong>Taniti Cycle Shop provides
                        competitive rates for daily and weekly bicycle rentals, with a focus on high-quality
                        bikes and excellent customer service.
                    </p>
                    <li><strong>Phone Number:</strong> +1-555-345-6789</li>
                    <li><strong>Address:</strong> 89 Cycling Street, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/bikes.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>City Bus</h1>
                    <p>
                        &emsp;Taniti City’s public bus service offers an efficient and convenient way to explore the
                        city and its surrounding areas. With a network of well-maintained buses operating throughout
                        the day, residents and visitors can easily reach popular destinations, including major
                        attractions, shopping districts, and residential neighborhoods. The service is known for its
                        punctuality and affordability, making it a reliable choice for getting around Taniti. Buses
                        run on a regular schedule with frequent stops, and there are several convenient transfer
                        points to connect with other routes.
                    </p>
                    <p><em>
                        For detailed information on bus routes, schedules, and fares, you can visit:
                    </em></p>
                    <li>
                        <a href='https://www.fakewebsitexyzabc.com'>Taniti City Bus Routes Website</a>
                    </li>
                </div>
                <div className="box image-box">
                    <img src="images/bus.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>Taxis</h1>
                    <p>
                        &emsp;Taxis on Taniti provide an essential and convenient transportation option for both
                        residents and visitors. The city’s taxi services are known for their high standards of
                        quality and reliability. Most taxis are well-maintained, with friendly and professional
                        drivers who are knowledgeable about the city and its attractions. Regulatory measures
                        ensure that taxis adhere to safety and service standards, including regular inspections
                        and fare meters to ensure fair pricing. Taxis are readily available throughout Taniti,
                        and many companies offer 24/7 service, making it easy to get around at any time of day or night.
                    </p>
                    <li><strong className="str">Taniti City Cabs - </strong><strong>Phone Number:</strong> +1-555-678-9012</li>
                    <li><strong className="str">Island Express Taxis - </strong><strong>Phone Number:</strong> +1-555-789-0123</li>
                    <li><strong className="str">Coral Taxi Services - </strong><strong>Phone Number:</strong> +1-555-890-1234</li>
                    <li><strong className="str">Seaside Taxis - </strong><strong>Phone Number:</strong> +1-555-901-2345</li>
                    <li><strong className="str">Sunset Cabs - </strong><strong>Phone Number:</strong> +1-555-012-3456</li>
                    <li><strong className="str">Tropical Taxi Co. - </strong><strong>Phone Number:</strong> +1-555-123-4567</li>
                </div>
                <div className="box image-box">
                    <img src="images/taxi.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>Rental Cars</h1>
                    <p>
                        <strong className="str">Island Drive Rentals - </strong>Island Drive Rentals is known for its exceptional
                        customer service and a wide range of rental vehicles, including luxury cars and family vans. They offer
                        competitive rates and a straightforward booking process, making it easy for visitors to find the perfect
                        car for their needs. With convenient locations and easy pickup and drop-off options, Island Drive Rentals
                        ensures a hassle-free experience for travelers looking to explore Taniti.
                    </p>
                    <li><strong>Phone Number:</strong> +1-555-789-0123</li>
                    <li><strong>Address:</strong> 123 Coral Street, Taniti</li>
                    <li>
                        <strong>Website: </strong>
                        <a href='https://www.fakewebsitexyzabc.com'>Island Drive Rentals</a>
                    </li>
                    <p>
                        <strong className="str">Tropical Wheels Car Rentals - </strong>Tropical Wheels Car Rentals offers a diverse
                        fleet of well-maintained vehicles to suit every traveler’s needs, from compact cars to spacious SUVs. With
                        competitive pricing and flexible rental options, this company provides excellent value and convenience for
                        exploring Taniti. Their friendly staff is dedicated to ensuring a smooth rental experience, and they offer
                        additional services such as GPS rentals and 24/7 roadside assistance.
                    </p>
                    <li><strong>Phone Number:</strong> +1-555-678-9012</li>
                    <li><strong>Address:</strong> 45 Palm Drive, Taniti</li>
                    <li>
                        <strong>Website: </strong>
                        <a href='https://www.fakewebsitexyzabc.com'>Tropical Wheels Car Rentals</a>
                    </li>
                </div>
                <div className="box image-box">
                    <img src="images/keys.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Transport;