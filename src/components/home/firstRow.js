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
          <WordCloud />
        </div>
        <div className="row mt-5">
          <ThemePieCharts />
        </div>
      </div>
    </div>
  );
};

const FirstRow = () => {
  return <Content />;
};

export default FirstRow;
