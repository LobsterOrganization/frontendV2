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
import Top10LikedTweetsTener from "../top10LikedTweetsTener/top10LikedTweetsTener";
import Top10ControvertialTweets from "../top10ControvertialTweets/top10ControvertialTweets";
import WordCloud from "../word-cloud/word-cloud";
import WordCloudAvril from "../word-cloudAvril/word-cloud";
import WordCloudMars from "../word-cloudMars/word-cloud";
import WordCloudFevrier from "../word-cloudFevrier/word-cloud";
import WordCloudJanvier from "../word-cloudJanvier/word-cloud";
import SentimentPieChart from "../sentimentPieChart/sentimentPieChart";
import ThemePieCharts from "../themesPieCharts/themePieCharts";
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
        <center>Ci-dessous, vous trouverez l'ensemble des tendances tout au long de l'année 2023 et mois par mois </center>
        <div className="row mt-5">
          <WordCloud />
        </div>
        <div className="row mt-5">
          <WordCloudAvril />
        </div>
        <div className="row mt-5">
          <WordCloudMars />
        </div>
        <div className="row mt-5">
          <WordCloudFevrier />
        </div>
      </div>
    </div>
  );
};

const FirstRow = () => {
  return <Content />;
};

export default FirstRow;
