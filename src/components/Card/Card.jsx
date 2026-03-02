import Button from "../Button/Button";
import "./Card.scss";

export default function Card({ title, price, description, featured }) {
  return (
    <div className={`card ${featured ? "card--featured" : ""}`}>
      <h3 className="card__title">{title}</h3>
      <div className="card__price">{price}</div>
      <p className="card__description">{description}</p>

      <div className="card__actions">
        <Button text="Satın Al" variant={featured ? "primary" : "secondary"} />
      </div>
    </div>
  );
}