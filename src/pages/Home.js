import { Link } from "react-router-dom";
import coffeetable from '../pics/Simple-modern-balcony-small-coffee-table-living-room-small-apartment-sofa-side-table-simple-home-bedroom 1.png'

const Home = () => {
    return (
        <section className="home_section">
            <article>
                <div>
                    <p>Are you looking for <span>wooden</span></p>
                    <p><span>furniture</span> for your place?</p>
                </div>
                <h2>This is the</h2>
                <h2>Right Place</h2>
                <Link to='/products'>Explore Categories</Link>
            </article>
            <div>
                <img src={coffeetable} alt="coffeetable" />
            </div>
        </section>
    );
}

export default Home;