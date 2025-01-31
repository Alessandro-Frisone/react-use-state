import { useState } from "react";

export default function Language({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((current) => !current)
  };

  return (
    <div className="language">
      <div className="language-title">
        <h1>{title}</h1>
        <button className="btn" onClick={toggle}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className="language-content">{isOpen && <p>{description}</p>}</div>
    </div>
  );
}
