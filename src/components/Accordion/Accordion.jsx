import { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion ${open ? "accordion--open" : ""}`}>
      <button
        type="button"
        className="accordion__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="accordion__icon">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="accordion__content">{content}</div>}
    </div>
  );
}