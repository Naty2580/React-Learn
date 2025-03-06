import { useState } from "react";
import data from "./data";
import "./accordionStyle.css";

const Index = () => {
  const [singleSelected, setSingleSelected] = useState("");

  let datas = [];

  const [multipleSelected, setMultipleSelected] = useState([]);
  const [diff, setDiff] = useState("all");
  const [showGenres, setShowGenres] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const [single, setSingle] = useState(true);

  const handleSingleSelect = (id) => {
    if (id === singleSelected) {
      setSingleSelected("");
    } else {
      setSingleSelected(id);
    }
  };

  const handleMultipleSelect = (id) => {
    if (multipleSelected.includes(id)) {
      const updatedSelection = multipleSelected.filter((item) => item !== id);
      setMultipleSelected(updatedSelection);
    } else {
      setMultipleSelected([...multipleSelected, id]);
    }
  };

  const handleChoice = (id) => {
    single ? handleSingleSelect(id) : handleMultipleSelect(id);
  };

  const handleDiff = () => {
    if (diff === "all") {
      setDiff("easy");
    } else if (diff === "easy") {
      setDiff("medium");
    } else if (diff === "medium") {
      setDiff("hard");
    } else if (diff === "hard") {
      setDiff("all");
    }
  };

  switch (diff) {
    case "easy":
      datas = data.filter((item) => item.difficulty === "Easy");
      break;
    case "medium":
      datas = data.filter((item) => item.difficulty === "Medium");
      break;
    case "hard":
      datas = data.filter((item) => item.difficulty === "Hard");
      break;
    default:
      datas = data;
  }

  const genres = Array.from(new Set(datas.map((question) => question.genre)));

  const filteredQuestions = selectedGenre
    ? datas.filter((question) => question.genre === selectedGenre)
    : [];

  return (
    <div className="accordion">
      <button onClick={() => setSingle(!single)}>
        {single ? "single" : "multiple"}
      </button>
      <button onClick={handleDiff}>{diff}</button>

      <button onClick={() => setShowGenres(!showGenres)}>
        {showGenres ? "Hide Genres" : "Show Genres"}
      </button>

      {showGenres && (
        <div>
          <label htmlFor="genre">Select a Genre:</label>
          <select
            id="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">all</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      )}

      <p id="q">QUIZ</p>
      {datas && datas.length > 0 ? (
        selectedGenre ? (
          <div>
            {selectedGenre && <h2>Questions for {selectedGenre}:</h2>}

            {filteredQuestions.map((item) => (
              <div
                key={item.id}
                className="containerr"
                onClick={() => handleChoice(item.id)}
              >
                <div id="number"> {item.id}</div>
                <div className="cont">
                  <p className="q"> {item.question} </p>

                  {single
                    ? singleSelected === item.id && (
                        <div className="a">
                          <hr />
                          <p className="answer"> {item.answer}</p>
                        </div>
                      )
                    : Array.isArray(multipleSelected) &&
                      multipleSelected.includes(item.id) && (
                        <div className="a">
                          <hr />
                          <p className="answer"> {item.answer}</p>
                        </div>
                      )}
                </div>
                <h6> {item.difficulty}</h6>
              </div>
            ))}

            {selectedGenre && filteredQuestions.length === 0 && (
              <p>No questions available for this genre.</p>
            )}
          </div>
        ) : (
          datas?.map((item) => (
            <div
              key={item.id}
              className="containerr"
              onClick={() => handleChoice(item.id)}
            >
              <div id="number"> {item.id}</div>
              <div className="cont">
                <p className="q"> {item.question} </p>

                {single
                  ? singleSelected === item.id && (
                      <div className="a">
                        <hr />
                        <p className="answer"> {item.answer}</p>
                      </div>
                    )
                  : Array.isArray(multipleSelected) &&
                    multipleSelected.includes(item.id) && (
                      <div className="a">
                        <hr />
                        <p className="answer"> {item.answer}</p>
                      </div>
                    )}
              </div>
              <h6> {item.difficulty}</h6>
            </div>
          ))
        )
      ) : (
        <div> No Data avialable </div>
      )}
    </div>
  );
};

export default Index;
