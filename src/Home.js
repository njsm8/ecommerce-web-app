import React from 'react'
import Product from "./Product";
import "./Home.css";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image " src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Consumables/JanART/MainEvent/GW/Herotators/RevisedUnrec/Event/41._CB661872878_.jpg" alt="Slider"/>

                <div className="home__row">
                    <Product id ="1234567" title ="The Lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51KGpwygTCL._SX389_BO1,204,203,200_.jpg" rating={4}/>
                    <Product id ="2345678" title ="Philips PowerPro FC9352/01 Compact Bagless Vacuum Cleaner (Blue) " price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/41xQDop2T5L.jpg" rating={3}/>
                    
                </div>

                <div className="home__row">
                    <Product id ="2345677" title ="Echo Dot (Black) Combo with Wipro 9W " price={14.99} image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg" rating={3} />
                    <Product id ="2345676" title ="Fackelmann Granite Non- Stick Kadai Grey Colour " price={18.99} image="https://images-na.ssl-images-amazon.com/images/I/71NWx3ioQfL._SX569_.jpg" rating={4} />
                    <Product id ="2345675" title ="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) " price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/815qFLtOfXL._SX679_.jpg" rating={2} />
                </div>

                <div className="home__row">
                    <Product id ="2345674" title ="PS4 1TB Slim Bundled with Spider-Man " price={49.99} image="https://images-na.ssl-images-amazon.com/images/I/61gLO71Zu0L._SX679_.jpg" rating={5}/>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Home
