import NavWrapper from "../../Components/NavWrapper/NavWrapper";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricingwrapper">
      <NavWrapper />
      <div className="pricingcontent">
        <div className="contenttext">
          <h2>
            Simple pricing.
            <br /> Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /> Vitae vel labore mollitia iusto. Recusandae quos
            <br /> provident, laboriosam fugit voluptatem iste.
          </p>
        </div>
        <div className="contentimage">
          <img src="/public/images/img-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
