import "./word-cloud.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop10UsedWordsAvril } from "../../actions/occurenceAvril.actions";
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
  const { top10UsedWordsAvril } = useSelector((state) => state.occurenceAvril);
  const [top10UsedWordListAvril, setTop10UsedWordListAvril] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTop10UsedWordsAvril());
  }, [dispatch]);

  useEffect(() => {
    if (top10UsedWordsAvril !== undefined) {
      fillTop10UsedWordListAvril();
    }
  }, [top10UsedWordsAvril]);

  const fillTop10UsedWordListAvril = () => {
    let wordsListAvril = [];
    wordsListAvril = top10UsedWordsAvril.map((element) => ({
      text: element.Mots,
      value: element.Freq,
    }));
    setTop10UsedWordListAvril(wordsListAvril);
  };
  return (
    <>
      <div>
        <h3 className="text-center">Les 10 tendances recurrentes d'avril 2023</h3>
      </div>
      <div>
        {top10UsedWordsAvril?.length !== 0 && top10UsedWordsAvril ? (
          <ReactWordcloud options={options} words={top10UsedWordListAvril} />
        ) : (
          <div className="text-center smallText">No Data Found</div>
          )}
      </div>
    </>
  );
};

export default WordCloudAvril;
