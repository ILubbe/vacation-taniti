import React from "react";
import '../App.css';

function Resturaunt () {
    return (
        <div>
            <h1 className='subpageHeader'>Food</h1>
            <div className="cont">
                <div className="box text-box">
                    <h1>Seafood</h1>
                    <p>
                        <strong className="str">Ocean’s Bounty Seafood Grill - </strong>This Seafood Grill offers a casual
                        dining experience with a menu featuring fresh, locally-sourced seafood and stunning ocean views.
                    </p>
                    <li><strong>Address:</strong> 101 Seaside Road, Taniti</li>
                    <p>
                        <strong className="str">The Coral Reef Bistro - </strong>This Bistro combines a relaxed atmosphere with gourmet
                        seafood dishes and an extensive wine list, perfect for a leisurely dinner.
                    </p>
                    <li><strong>Address:</strong> 202 Reef Street, Taniti</li>
                    <p>
                        <strong className="str">Blue Wave Seafood House - </strong>This Seafood House specializes in innovative
                        seafood dishes and traditional favorites, served in a contemporary setting with panoramic views.
                    </p>
                    <li><strong>Address:</strong> 303 Wave Avenue, Taniti</li>
                    <p>
                        <strong className="str">Pearl’s Seafood Haven - </strong>Pearl’s Seafood Haven offers a cozy ambiance and a
                        diverse menu of fresh seafood, including local catches and classic dishes.
                    </p>
                    <li><strong>Address:</strong> 404 Pearl Lane, Taniti</li>
                    <p>
                        <strong className="str">Harbor Lights Seafood Restaurant - </strong>Harbor Lights Seafood Restaurant features
                        an elegant dining experience with a focus on seasonal seafood and exquisite culinary creations.
                    </p>
                    <li><strong>Address:</strong> 505 Harbor Boulevard, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/seafood.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>Pan-Asian</h1>
                    <p>
                        <strong className="str">Bamboo Garden Bistro - </strong>Bamboo Garden Bistro offers a vibrant dining experience
                        with a diverse menu of Pan-Asian delicacies, including flavorful Thai curries and sushi rolls.
                    </p>
                    <li><strong>Address:</strong> 12 Lotus Plaza, Taniti</li>
                    <p>
                        <strong className="str">Zen Harmony Café - </strong>Zen Harmony Café provides a serene atmosphere and a menu
                        that features a fusion of Japanese, Chinese, and Korean dishes, all prepared with fresh,
                        high-quality ingredients.
                    </p>
                    <li><strong>Address:</strong> 78 Main Street, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/pan-asian-food.jpg" alt=""/>
                </div>
            </div>
            <div className="cont">
                <div className="box text-box">
                    <h1>American</h1>
                    <p>
                        <strong className="str">The Big Apple Diner - </strong>The Big Apple Diner brings a taste of classic American
                        comfort food with hearty burgers, crispy fries, and delectable milkshakes in a retro setting.
                    </p>
                    <li><strong>Address:</strong> 300 Main Street, Taniti</li>
                    <p>
                        <strong className="str">Red Rock Grill - </strong>Red Rock Grill offers a robust menu of American favorites,
                        including tender steaks and savory BBQ ribs, in a warm and inviting atmosphere.
                    </p>
                    <li><strong>Address:</strong> 123 Canyon Road, Taniti</li>
                    <p>
                        <strong className="str">Liberty Café - </strong>Liberty Café provides a cozy ambiance with a diverse selection
                        of American dishes, from fresh salads and gourmet sandwiches to delicious breakfast all day.
                    </p>
                    <li><strong>Address:</strong> 234 Freedom Avenue, Taniti</li>
                </div>
                <div className="box image-box">
                    <img src="images/american-food.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Resturaunt;