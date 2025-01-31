export default function Language({title, description}) {
  return (
    <div className="language">
      <div className="language-title">
        <h1>{title}</h1>
        <button className="btn">+</button>
      </div>
      <div className="language-content">
        <p>{description}</p>
      </div>
    </div>
  );
}
