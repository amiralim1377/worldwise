import NavWrapper from "../../Components/NavWrapper/NavWrapper";
import "./Product.css";
function Product() {
  return (
    <div className="productwrapper">
      <NavWrapper />
      <div className="contentwrapper">
        <div className="leftwrapper">
          <img src="/public/images/img-1.jpg" alt="" />
        </div>
        <div className="rightwrapper">
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Illo est dicta illum vero culpa cum quaerat architecto
            <br />
            sapiente eius non soluta, molestiae nihil laborum,
            <br /> placeat debitis, laboriosam at fuga perspiciatis?
            <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Corporis doloribus libero sunt expedita ratione iusto, magni,
            <br />
            id sapiente sequi officiis et.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
