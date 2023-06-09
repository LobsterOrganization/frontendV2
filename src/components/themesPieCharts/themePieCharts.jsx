import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroupedEcologicalThemes,
  getGroupedEnergeticalThemes,
} from "../../actions/polarite.actions";
import { Pie } from "react-chartjs-2";
import DatePicker from "react-date-picker";

const ThemePieCharts = () => {
  const { groupedEcologicalThemes, groupedEnergeticalThemes } = useSelector(
    (state) => state.polarite
  );
  const [ecologicalThemes, setEcologicalThemes] = useState();
  const [energeticalThemes, setEnergeticalThemes] = useState();
  const [ecologicalThemesDateValue, setEcologicalThemeDateValue] = useState(
    new Date()
  );
  const [energeticalThemesDateValue, setEnergeticalThemeDateValue] = useState(
    new Date()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroupedEcologicalThemes(ecologicalThemesDateValue));
    dispatch(getGroupedEnergeticalThemes(energeticalThemesDateValue));
  }, [dispatch]);
  useEffect(() => {
    if (
      groupedEcologicalThemes !== undefined &&
      groupedEcologicalThemes?.length !== 0
    ) {
      fillEcologicalThemesPieChart();
    }
  }, [groupedEcologicalThemes]);
  useEffect(() => {
    if (
      groupedEnergeticalThemes !== undefined &&
      groupedEcologicalThemes?.length !== 0
    ) {
      fillEnergeticalThemesPieChart();
    }
  }, [groupedEnergeticalThemes]);

  const generateDarkClearColor = () => {
    var red = Math.floor(Math.random() * (256 - 128) + 128);
    var green = Math.floor(Math.random() * (256 - 128) + 128);
    var blue = Math.floor(Math.random() * (256 - 128) + 128);
    var alpha = Math.random() * (1.0 - 0.3) + 0.3;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const fillEcologicalThemesPieChart = () => {
    let tempArr = {
      labels: [],
      datasets: [
        {
          label: "Ecological Theme",
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    };
    groupedEcologicalThemes.map((element) => {
      let color = generateDarkClearColor();
      tempArr.labels.push(element.themeEcologique);
      tempArr.datasets[0].data.push(element.count);
      tempArr.datasets[0].backgroundColor.push(color);
      tempArr.datasets[0].borderColor.push(color);
    });

    setEcologicalThemes(tempArr);
  };

  const fillEnergeticalThemesPieChart = () => {
    let tempArr = {
      labels: [],
      datasets: [
        {
          label: "Energetical Theme",
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    };
    groupedEnergeticalThemes.map((element) => {
      let color = generateDarkClearColor();
      tempArr.labels.push(element.themeEnergetique);
      tempArr.datasets[0].data.push(element.count);
      tempArr.datasets[0].backgroundColor.push(color);
      tempArr.datasets[0].borderColor.push(color);
    });
    setEnergeticalThemes(tempArr);
  };

  const handleEcologicalThemeDateChange = (event) => {
    setEcologicalThemeDateValue(event);
    if (event !== undefined && event !== null) {
    }
    dispatch(getGroupedEcologicalThemes({ ecologicalThemesDateValue: event }));
  };

  const handleEnergeticalThemeDateChange = (event) => {
    setEnergeticalThemeDateValue(event);
    if (event !== undefined && event !== null) {
    }
    dispatch(
      getGroupedEnergeticalThemes({ energeticalThemesDateValue: event })
    );
  };
  return (
    <div>
      <div className="text-center">Proportions des thèmes énergétiques et thèmes écologiques</div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="tweetsBarGraphDatePicker">
            <DatePicker
              className={"datePicker"}
              format="dd-MM-yyyy"
              onChange={handleEcologicalThemeDateChange}
              value={ecologicalThemesDateValue}
            />
          </div>
          <div style={{ width: "70%", margin: "auto" }}>
            {ecologicalThemes !== undefined ? (
              <Pie data={ecologicalThemes} />
            ) : (
              <div className="text-center smallText">No Data Found</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="tweetsBarGraphDatePicker">
            <DatePicker
              className={"datePicker"}
              format="dd-MM-yyyy"
              onChange={handleEnergeticalThemeDateChange}
              value={energeticalThemesDateValue}
            />
          </div>
          <div style={{ width: "70%", margin: "auto" }}>
            {energeticalThemes !== undefined ? (
              <Pie data={energeticalThemes} />
            ) : (
              <div className="text-center smallText">No Data Found</div>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ThemePieCharts;
