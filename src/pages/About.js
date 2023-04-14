import kalmar from '../pics/Kalmar-Home-7-pc-Acacia-Wood-Salad-Bowl-Set 1.png'

const About = () => {
    return (
        <section className="about_section">
            <div>
                <h2>🪵 Who we are </h2>
                <p className="about_us">ABOUT US</p>
            </div>
            <article className='section_article'>
                <img src={kalmar} alt="kalmar" />
                <article>
                    <h2>WOODIES <span>is the </span>home of</h2>
                    <h2> modern wooden furniture</h2>
                    <p>the answer to your need for furniture</p>
                    <p>with shapes, sizes and colors.</p>
                </article>
            </article>
        </section>
    );
}

export default About;