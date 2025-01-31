import languages from "../data/languagesData";

export default function Language() {
  return (
    <div className="languages-list">
      {languages.map((elm) => {
        return (
          <div className="language" key={languages.id}>
            <div className="language-title">
              <h1>{elm.title}</h1>
              <button className="btn">+</button>
            </div>
            <div className="language-content">
              <p>{elm.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
