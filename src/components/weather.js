import React from 'react';

const Weather = (props) => (
    <div className="infoWeath">
      {props.city && 
        <div>
          <p>{props.city}</p>
          <p><img src={props.weatherIcon} className="weathImg" alt="WeathIcon"/> {props.temp} °C</p>
          <p>Влажность: {props.humidity}%</p>
          <p>Ветер: {Math.ceil((props.wind / 3.6)*10)/10}м/с</p>
        </div>
      }
      <p className="error">{props.error}</p>
    </div>
);

export default Weather;