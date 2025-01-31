import Language from "./Language";
import languages from "../data/languagesData";

export default function LanguagesList() {
  return (
    <div className="container">
      <div className="languages-list">
        {languages.map((elm, index) => {
          return (
            <Language
              key={index}
              title={elm.title}
              description={elm.description}
            />
          );
        })}
      </div>
    </div>
  );
}
