import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop5ControvertialTweets } from "../../actions/tweetsAction";
import moment from "moment";
import ProgressBar from "@ramonak/react-progress-bar";
import DatePicker from "react-date-picker";
const Top10ControvertialTweets = () => {
  const { top5ControvertialTweets } = useSelector((state) => state.tweets);
  const [top5ControvertialTweetsData, setTop5ControvertialTweetsData] =
    useState();
  const [
    top5ControvertialTweetsDateValue,
    setTop5ControvertialTweetsDateValue,
  ] = useState(new Date());
  const dispatch = useDispatch();

  const handleTop5ControvertialTweetsDateChange = (event) => {
    setTop5ControvertialTweetsDateValue(event);
    if (event !== undefined && event !== null) {
    }
    dispatch(
      getTop5ControvertialTweets({ top5ControvertialTweetsDateValue: event })
    );
  };

  useEffect(() => {
    dispatch(getTop5ControvertialTweets({ top5ControvertialTweetsDateValue }));
  }, [dispatch]);

  useEffect(() => {
    if (top5ControvertialTweets !== undefined) {
      fillTop5ControvertialTweetsProgressBar();
    }
  }, [top5ControvertialTweets]);

  const fillTop5ControvertialTweetsProgressBar = () => {
    let maxQuotes = top5ControvertialTweets[0]?.quotes;
    let tempArr = [];
    top5ControvertialTweets.map((element) => {
      tempArr.push({
        username: `@${element.user}`,
        quotes: element.quotes,
        percentage: Math.round((element.quotes / maxQuotes) * 100),
        content: element.content,
        date: moment(new Date(element.Date)).utc().format("D MMM YYYY"),
      });
    });
    tempArr.sort((a, b) => b.percentage - a.percentage);
    setTop5ControvertialTweetsData(tempArr);
  };
  return (
    <>
      <DatePicker
        className={"datePicker"}
        format="dd-MM-yyyy"
        onChange={handleTop5ControvertialTweetsDateChange}
        value={top5ControvertialTweetsDateValue}
      />
      <div className="span4" id="row-first-content2">
        <h3 className="text-center">
          <a href="#">Les 5 Tweets les plus controversés</a>
        </h3>
        <div className="top5TweetsContainer">
          {top5ControvertialTweetsData?.length !== 0 &&
          top5ControvertialTweetsData ? (
            top5ControvertialTweetsData.map((element, index) => {
              return (
                <div key={index}>
                  <div className="text-right smallText">
                    {element.content}
                  </div>
                  <div className="text-right smallText">{element.date}</div>
                  <div className="top5TweetsProgressBar">
                    <div className="progressBarContainer">
                      <ProgressBar
                        completed={element.percentage}
                        customLabel={element.username}
                        labelAlignment="left"
                        bgColor="#66b8f4"
                        maxCompleted={
                          top5ControvertialTweetsData[0]?.percentage
                        }
                        height="20px"
                        baseBgColor="rgb(236, 234, 252)"
                        labelColor="#f6f3f3"
                      />
                    </div>
                    <div>
                      <p className="text-right smallText">{element.quotes}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center smallText">No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Top10ControvertialTweets;
