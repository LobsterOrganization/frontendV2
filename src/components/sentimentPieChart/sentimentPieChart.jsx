import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getGroupedSentiment } from "../../actions/sentimentAction";
import DatePicker from "react-date-picker";
ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentPieChart = () => {
  const [sentimentPieChartData, setSentimentPieChartData] = useState();
  const { sentiments } = useSelector((state) => state.sentiments);
  const [sentimentPieChartDateValue, setSentimentPieChartDateValue] = useState(
    new Date()
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGroupedSentiment(sentimentPieChartDateValue));
  }, [dispatch]);
  useEffect(() => {
    if (sentiments !== undefined && sentiments.length !== 0) {
      fillSentimentPieChart();
    }
  }, [sentiments]);

  const handleSentimentPieChartDateChange = (event) => {
    setSentimentPieChartDateValue(event);
    if (event !== undefined && event !== null) {
    }
    dispatch(getGroupedSentiment({ sentimentPieChartDateValue: event }));
  };

  const fillSentimentPieChart = () => {
    let { negative, neutral, positive } = sentiments[0];
    let tempArr = {
      labels: ["Négatif", "Neutre", "Positifs"],
      datasets: [
        {
          label: "Sentiment",
          data: [negative, neutral, positive],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setSentimentPieChartData(tempArr);
  };

  return (
    <>
      <div className="tweetsBarGraphDatePicker">
        <DatePicker
          className={"datePicker"}
          format="dd-MM-yyyy"
          onChange={handleSentimentPieChartDateChange}
          value={sentimentPieChartDateValue}
        />
      </div>
      <div className="text-center">Proportion des sentiments</div>
      <div style={{ width: "35%" }}>
        {" "}
        {sentimentPieChartData?.length !== 0 && sentimentPieChartData ? (
          <Pie data={sentimentPieChartData} />
        ) : (
          <div className="text-center smallText">No Data Found</div>
        )}
      </div>
    </>
  );
};

export default SentimentPieChart;
