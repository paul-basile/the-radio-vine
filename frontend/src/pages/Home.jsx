import Navbar from "./Navbar";
import radioImage from '../assets/radio-icon.png'

function Home() {

    return (
        <div className="home">
            <Navbar />
            <main className="main-content">

                <div className="upper-content">
                    <div className="slogan">
                        <h2 className="site-heading">Welcome to <h2 className="site-title">The Radio Vine!</h2></h2>
                        <p className="site-description">Browse radio stations from all kinds of places.</p>
                    </div>
                    <img src={radioImage} alt="Radio icon" className="radio-image"/>
                </div>

                <div className="lower-content">
                    <div className="about">
                        <h3 className="section-heading">About The Radio Vine</h3>
                        <p>The Radio Vine is a website featuring options to view data on different radio stations from all sorts of locations, as well as an option to view
                            the status of the server in which the radio stations are coming from, as well as some general information about the radio endpoints.
                        </p>
                        <p>This project was made to serve as an easy access point to your favorite radio stations while being easy to navigate and simple to process.</p>
                    </div>
                    <div className="fun-facts">
                        <h3 className="section-heading">5 Radio Fun Facts</h3>
                        <ul className="fun-fact-list">
                            <li>1. Clerk Maxwell was the first to foresee that radio waves existed. His theory is known as Maxwell's equations, 
                                and it described light and radio waves as electromagnetic waves traveling through space. Other types of electromagnetic waves include Bluetooth, 
                                radar, x-rays, infrared, ultraviolet, and microwaves.</li>
                            <li>2. Heinrich Hertz demonstrated radio waves in his lab in 1887. The unit of frequency of a radio wave — one cycle per second — is named the hertz, 
                                in honor of Heinrich Hertz. Radio is broadcasted in different frequencies, including the FM radio waves that range between 88 MHz and 108 MHz 
                                (FM stands for frequency modulation, which produces a wave of constant amplitude but varying frequency.) AM radio waves posted between 550 kHz 
                                and 1600 kHz.</li>
                            <li>3. In the 1980s, people were able to download video games from a radio broadcast. 
                                They would record the sounds onto a cassette tape, and then they could play later on their computers.</li>
                            <li>4. It is believed that radio waves will continue to travel forever unless something absorbs them. 
                                If that is the case, and if there are more life forms in other parts of the universe, then other planets may have heard the radio waves.</li>
                            <li>5. In 2005, a radio sampled 3,500 music fans to make the 'rock's ultimate supergroup.' Then they were to choose the best musician 
                                of all time for every musical instrument. They ended up forming Led Zeppelin.</li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>
    )

};

export default Home;