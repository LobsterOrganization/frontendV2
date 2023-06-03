import "./word-cloud.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop10UsedWords } from "../../actions/occurenceAvril.actions";
import ReactWordcloud from "react-wordcloud";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [30, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const WordCloudAvril = () => {
  const { top10UsedWords } = useSelector((state) => state.occurence);
  const [top10UsedWordList, setTop10UsedWordList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTop10UsedWords());
  }, [dispatch]);

  useEffect(() => {
    if (top10UsedWords !== undefined) {
      fillTop10UsedWordList();
    }
  }, [top10UsedWords]);

  const fillTop10UsedWordList = () => {
    let wordsList = [];
    wordsList = top10UsedWords.map((element) => ({
      text: element.mots,
      value: element.freq,
    }));
    setTop10UsedWordList(wordsList);
  };
  return (
    <>
      <div>
        <h3 className="text-center">Les 10 tendances recurrentes d'avril 2023</h3>
      </div>
      <div>
        {top10UsedWords?.length !== 0 && top10UsedWords ? (
          <ReactWordcloud options={options} words={top10UsedWordList} />
        ) : (
          <div className="text-center smallText">No Data Found</div>
          )}
      </div>
    </>
  );
};

export default WordCloudAvril;
