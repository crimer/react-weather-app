import React from "react";
const WeekDay = ({day,icon,degree}) => {
  return (
    <>
      <div className="weeks__day">
        <p className="day">MON</p>
        <svg id="Layer_1" viewBox="0 0 485 485" fill="#DE9E45">
          <path
            d="M485,257.5v-30h-73.843c-3.126-35.441-17.213-67.78-38.847-93.597l52.27-52.269L403.367,60.42l-52.27,52.27
              C325.28,91.056,292.941,76.969,257.5,73.843V0h-30v73.843c-35.441,3.126-67.78,17.213-93.597,38.847l-52.27-52.27L60.42,81.633
              l52.27,52.269C91.056,159.72,76.969,192.059,73.843,227.5H0v30h73.843c3.126,35.441,17.213,67.78,38.847,93.597l-52.27,52.269
              l21.213,21.213l52.27-52.27c25.818,21.634,58.156,35.721,93.597,38.847V485h30v-73.843c35.441-3.126,67.78-17.213,93.597-38.847
              l52.27,52.27l21.213-21.213l-52.27-52.269c21.634-25.818,35.721-58.156,38.847-93.597H485z M242.5,381.829
              c-76.826,0-139.329-62.503-139.329-139.329S165.674,103.171,242.5,103.171S381.829,165.674,381.829,242.5
              S319.326,381.829,242.5,381.829z"
          />
        </svg>
        <span>13&deg;</span>
      </div>
    </>
  );
};
export default WeekDay;