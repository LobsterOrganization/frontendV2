import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop5LikedTweets } from "../../actions/tweetsActionTener";
import moment from "moment";
import ProgressBar from "@ramonak/react-progress-bar";
import DatePicker from "react-date-picker";
const Top10LikedTweetsTener = () => {
  const { top5LikedTweets } = useSelector((state) => state.tweets);
  const [top5LikedTweetsData, setTop5LikedTweetsData] = useState();
  const [top5LikedTweetsDateValue, setTop5LikedTweetsDateValue] = useState(
    new Date()
  );
  const dispatch = useDispatch();

  const handleTop5LikedTweetsDateChange = (event) => {
    setTop5LikedTweetsDateValue(event);
    if (event !== undefined && event !== null) {
        let startDate = new Date(event);
        startDate.setUTCHours(0, 0, 0, 0);
        startDate.setMonth(0);
        startDate.setDate(1);

        let endDate = new Date(event);
        endDate.setUTCHours(23, 59, 59, 999);
        endDate.setMonth(11);
        endDate.setDate(31);
        console.log('Start date before formatting:', startDate);
        console.log('End date before formatting:', endDate);

        dispatch(getTop5LikedTweets({ startDate: startDate, endDate: endDate }));
    }
};

useEffect(() => {
  let startDate = new Date();
  startDate.setUTCHours(0, 0, 0, 0);
  startDate.setMonth(0);
  startDate.setDate(1);

  let endDate = new Date();
  endDate.setUTCHours(23, 59, 59, 999);
  endDate.setMonth(11);
  endDate.setDate(31);

  dispatch(getTop5LikedTweets({ startDate: startDate, endDate: endDate }));
}, [dispatch]);


  useEffect(() => {
    if (top5LikedTweets !== undefined) {
      fillTop5LikedTweetsProgressBar();
    }
  }, [top5LikedTweets]);

  const fillTop5LikedTweetsProgressBar = () => {
    let maxHearts = top5LikedTweets[0]?.hearts;
    let tempArr = [];
    top5LikedTweets.map((element) => {
      tempArr.push({
        username: `@${element.user}`,
        hearts: element.hearts,
        percentage: Math.round((element.hearts / maxHearts) * 100),
        content: element.content,
        date: moment(new Date(element.date)).utc().format("D MMM YYYY"),
      });
    });
    tempArr.sort((a, b) => b.percentage - a.percentage);
    setTop5LikedTweetsData(tempArr);
  };

  return (
    <>
      <DatePicker
        className={"datePicker"}
        format="yyyy"
        onChange={handleTop5LikedTweetsDateChange}
        value={top5LikedTweetsDateValue}
        view="decade"
      />
      <div className="span4" id="row-first-content1">
        <h3 className="text-center">
          <a href="#">Les 5 tweets les plus appréciés</a>
        </h3>
        <div className="top5TweetsContainer">
          {top5LikedTweetsData?.length !== 0 && top5LikedTweetsData ? (
            top5LikedTweetsData.map((element, index) => {
              return (
                <div key={index}>
                  <div className="text-right smallText truncateContextText">
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
                        maxCompleted={top5LikedTweetsData[0]?.percentage}
                        height="20px"
                        baseBgColor="rgb(253, 241, 231)"
                        labelColor="#f6f3f3"
                      />
                    </div>
                    <div>
                      <p className="text-right smallText">{element.hearts}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center smallText"> No Data Found </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Top10LikedTweetsTener;
