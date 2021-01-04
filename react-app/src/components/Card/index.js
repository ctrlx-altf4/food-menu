import { BiTimeFive, BiDish } from "react-icons/bi";

const Card = ({ title, time, description, price, img, qty }) => {
  return (
    <div className="card" onClick={() => alert("clicked here")}>
      <div className="img-container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${img}`,
          }}
        ></div>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <hr width={40} className="divider" />
        <p>{description}</p>
        <footer className="description-footer">
          <span>
            <BiTimeFive className="description-footer-icon" />
            {time}
          </span>
          <span>
            <BiDish className="description-footer-icon" />
            {qty}
          </span>
        </footer>
      </div>
      <div className="rate">
        <span id="label">Price</span>
        <h2 id="value">{price}</h2>
      </div>
    </div>
  );
};
export default Card;
