import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TweetsProportionBarGraph from "../tweetsProportionBarGraph/tweetsProportionBarGraph";
import Top10LikedTweets from "../top10LikedTweets/top10LikedTweets";
import Top10ControvertialTweets from "../top10ControvertialTweets/top10ControvertialTweets";
import WordCloud from "../word-cloud/word-cloud";
import WordCloudAvril from "../word-cloudAvril/word-cloud";
import WordCloudMars from "../word-cloudMars/word-cloud";
import WordCloudFevrier from "../word-cloudFevrier/word-cloud";
import WordCloudJanvier from "../word-cloudJanvier/word-cloud";
import SentimentPieChart from "../sentimentPieChart/sentimentPieChart";
import ThemePieCharts from "../themesPieCharts/themePieCharts";
import InfluenceurCloud from "../influenceur/influenceurCloud";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Content = () => {
  return (
    <div className="page-content-first" id="first-content">
      <div className="container-fluid">
        <div className="row">
          <TweetsProportionBarGraph />
        </div>
        <div className="row mt-5">
          <div className="col-md-6 top5LikedTweetsColumn">
            <Top10LikedTweets />
          </div>
          <div className="col-md-6 top5LikedTweetsColumn">
            <Top10ControvertialTweets />
          </div>
        </div>
        <div className="row mt-5 sentimentPieChart">
          <SentimentPieChart />
        </div>
        <div className="row mt-5">
          <ThemePieCharts />
        </div>
        <center><b>Ci-dessous, vous trouverez les 10 personnes les plus influentes de twitter au sujet de la transition écologique et énergétique</b> </center>
        <div className="row mt-5">
          <WordCloud />
        </div>
      </div>
    </div>
  );
};

const FirstRow = () => {
  return <Content />;
};

export default FirstRow;
