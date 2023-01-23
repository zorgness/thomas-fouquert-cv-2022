import React from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect } from "react";
import { handledarkMode } from "../redux/actions/darkModeAction";
import { connect } from "react-redux";

const ToggleDarkMode = ({ theme, handledarkMode }) => {
  const { isdarkMode } = theme;

  const switchDarkMode = () => {
    isdarkMode ? handledarkMode(false) : handledarkMode(true);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
    document.body.style.color = isdarkMode ? "#fff" : "#292c35";
    const titles = ["h1", "h2", "h3", "h4", "h5"];

    titles.forEach((title) => {
      document.querySelectorAll(title).forEach((el) => {
        el.style.color = isdarkMode ? "#fff" : "#292c35";
      });
    });

    // document.querySelectorAll("h1").forEach((el) => {
    //   el.style.color = isdarkMode ? "#fff" : "#292c35";
    // });
    // document.querySelectorAll("h4").forEach((el) => {
    //   el.style.color = isdarkMode ? "#fff" : "#292c35";
    // });
    // document.querySelectorAll("h5").forEach((el) => {
    //   el.style.color = isdarkMode ? "#fff" : "#292c35";
    // });
  }, [isdarkMode]);

  return (
    <div id="darkmode">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={switchDarkMode}
        checked={isdarkMode}
      />
      <label htmlFor="checkbox" className="label">
        <BsMoonStarsFill color="white" />
        <BsFillSunFill color="yellow" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handledarkMode: (mode) => dispatch(handledarkMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleDarkMode);
