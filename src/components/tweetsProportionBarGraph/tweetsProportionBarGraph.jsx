import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTweetsGroupedByDate } from "../../actions/tweetsAction";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-date-picker";

const options = {
  indexAxis: "x",
  autoPadding: true,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  barPercentage: 0.5,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Total",
    },
  },
};

const monthList = {
  "01": "Janvier",
  "02": "Février",
  "03": "Mars",
  "04": "Avril",
  "05": "Mai",
  "06": "Juin",
  "07": "Juillet",
  "08": "Aôut",
  "09": "Septembre",
  10: "Octobre",
  11: "Novembre",
  12: "Décembre",
};
const TweetsProportionBarGraph = () => {
  const [tweetBarChartData, setTweetBarChartData] = useState();
  const { tweetsGroupedByDate } = useSelector((state) => state.tweets);
  const dispatch = useDispatch();
  const [tweetBarChartDateValue, setTweetBarChartDateValue] = useState(
    new Date()
  );

  const handleTweetBarChartDateChange = (event) => {
    setTweetBarChartDateValue(event);
    if (event !== undefined && event !== null) {
    }
    dispatch(getTweetsGroupedByDate({ tweetBarChartDateValue: event }));
  };
  useEffect(() => {
    dispatch(getTweetsGroupedByDate({ tweetBarChartDateValue }));
  }, [dispatch]);
  useEffect(() => {
    if (tweetsGroupedByDate !== undefined) {
      fillBarChartData();
    }
  }, [tweetsGroupedByDate]);

  const fillBarChartData = () => {
    let twitterCountData = [];
    let tempArray = {
      labels: [],
      datasets: [],
    };
    tweetsGroupedByDate.map((element) => {
      tempArray.labels.push(monthList[element.month]);
      twitterCountData.push(element.count);
    });
    tempArray.datasets.push({
      label: "Nombre de tweets",
      data: [...twitterCountData],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    });
    setTweetBarChartData(tempArray);
  };

  return (
    <>
      <div className="col-md-12 tweetsBarGraphContainer" id="first-row-content">
        <div className="tweetsBarGraphDatePicker">
          <DatePicker
            className={"datePicker"}
            format="dd-MM-yyyy"
            onChange={handleTweetBarChartDateChange}
            value={tweetBarChartDateValue}
          />
        </div>
        <div>
          <h4 className="text-center">Proportion des tweets</h4>
        </div>
        <div style={{ height: "100%" }}>
          {tweetBarChartData !== undefined && tweetBarChartData !== null ? (
            <Bar options={options} data={tweetBarChartData} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TweetsProportionBarGraph;
