import konfest from '../pics/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-tables-moveable-furniture-furnishing-fixtures-appliance-top-view-48 1.png'
import softpad from '../pics/soft-pad-dining-chair-with-solid-oak-crossed-wood-legs-cool-grey-p1561-26034_zoom 1.png'
import bowls from '../pics/fd2d95252c7fbc851e6dc7463e6b3284 1.png'

const Products = () => {
    return (
        <section className="section_product">
            <div>
                <h2>🪵 What we have </h2>
                <p className="products">PRODUCTS</p>
            </div>
            <article>
                <div>
                    <p>Jenson</p>
                    <img src={konfest} alt="konfest" />
                    <input type="button" value="Shop now" />
                </div>
                <div>
                    <p>Deon</p>
                    <img src={softpad} alt="softpad" />
                    <input type="button" value="Shop now" />
                </div>
                <div>
                    <p>Krisha</p>
                    <img src={bowls} alt="bowls" />
                    <input type="button" value="Shop now" />
                </div>
            </article>
        </section>
    );
}

export default Products;