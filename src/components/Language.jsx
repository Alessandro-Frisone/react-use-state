import { useState } from "react";

export default function Language({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((current) => !current)
  };

  return (
    <div className="language">
      <div className="language-title" style={{backgroundColor: isOpen ? "#ecc53e" : "white"}}>
        <h1><strong>{title}</strong></h1>
        <button style={{backgroundColor: isOpen ? "#ecc53e" : "white"}} className="btn" onClick={toggle}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className="language-content">{isOpen && <p>{description}</p>}</div>
    </div>
  );
}
