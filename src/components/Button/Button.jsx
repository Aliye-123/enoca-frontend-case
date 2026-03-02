import "./Button.scss";

export default function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
  ariaLabel
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant}`}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}