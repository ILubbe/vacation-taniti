import React from "react";
import '../App.css';

function Store () {
    return (
        <div>
            <h1 className='subpageHeader'>Stores</h1>
            <div className="cont">
                <div className="box text-box">
                    <h1>Coral Coast Superstore</h1>
                    <p>
                        &emsp;Coral Coast Superstore stands out as a comprehensive retail destination with its
                        extensive product range and competitive pricing. The supermarket features a large selection
                        of groceries, household items, and specialty products, catering to a wide array of shopping
                        needs. From fresh produce and meat to electronics and clothing, Coral Coast Superstore ensures
                        that shoppers can find everything under one roof. The store also includes a bakery and deli,
                        offering a variety of freshly prepared foods and gourmet items.
                    </p>
                    <p>
                        &emsp;With its spacious layout and frequent promotions, Coral Coast Superstore provides a
                        convenient and budget-friendly shopping experience. The store’s ample parking and easy-to-navigate
                        sections make it a popular choice for both everyday shopping and larger purchases. Whether you’re
                        stocking up on essentials or exploring new products, Coral Coast Superstore delivers a comprehensive
                        and enjoyable shopping experience.
                    </p>
                    <li><strong>Address:</strong> 234 Coastal Road, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/supermarket.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>Taniti Fresh Market</h1>
                    <p>
                        &emsp;Taniti Fresh Market is renowned for its diverse selection of high-quality produce and local
                        goods. The supermarket prides itself on offering fresh fruits and vegetables sourced from local farms,
                        ensuring that customers receive the best in terms of flavor and nutrition. The aisles are
                        well-organized, featuring a range of organic options, freshly baked goods, and a variety of
                        international food products. The market also offers a range of dairy products, meats, and pantry
                        staples, making it a convenient choice for daily grocery shopping.
                    </p>
                    <p>
                        &emsp;In addition to its impressive product range, Taniti Fresh Market is known for its friendly and
                        knowledgeable staff. The store’s clean and welcoming atmosphere enhances the shopping experience,
                        allowing customers to find what they need quickly and efficiently. Whether you’re a local resident or
                        a visitor looking to stock up on essentials, Taniti Fresh Market offers a dependable and pleasant
                        shopping environment.
                    </p>
                    <li><strong>Address:</strong> 78 Greenway Avenue, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/grocery.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>Quick Stop Convenience Store</h1>
                    <p>
                        &emsp;Quick Stop Convenience Store is the go-to spot for quick and easy access to everyday essentials,
                        open 24/7 to cater to all your last-minute needs. This well-stocked store offers a variety of items,
                        from snacks and beverages to personal care products and household necessities. With its prime location
                        and round-the-clock service, Quick Stop Convenience Store provides a convenient solution for any time
                        of day or night. The store’s compact yet well-organized layout ensures that customers can find what
                        they need swiftly, whether it’s a bottle of water, a loaf of bread, or a late-night snack.
                    </p>
                    <p>
                        &emsp;In addition to its wide selection of convenience items, Quick Stop Convenience Store is known
                        for its friendly service and clean environment. The staff are always ready to assist with any queries
                        and ensure a pleasant shopping experience. With its focus on customer convenience and accessibility,
                        Quick Stop Convenience Store is an essential part of the community, offering a reliable and efficient
                        shopping option for residents and visitors alike, no matter the hour.
                    </p>
                    <li><strong>Address:</strong> 12 Elm Street, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/corner-store.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Store;