import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather'

const API_KEY = 'ea5603c0c73048328ee104931191507';

class App extends React.Component {

  state = {
    city: undefined,
    temp: undefined,
    weatherIcon: undefined,
    humidity: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    if(city){
      const API_URL = await fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&q=${city}&format=json`);
      const data = await API_URL.json();
      this.setState({
        temp: data.data.current_condition[0].temp_C,
        city: data.data.request[0].query,
        weatherIcon: data.data.current_condition[0].weatherIconUrl[0].value,
        humidity: data.data.current_condition[0].humidity,
        wind: data.data.current_condition[0].windspeedKmph,
        error: undefined
      });
    } else{
      this.setState({
        temp: undefined,
        city: undefined,
        weatherIcon: undefined,
        humidity: undefined,
        wind: undefined,
        error: "Введите название города"
      });
    }
  }

  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.getWeather}/>
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  weatherIcon={this.state.weatherIcon}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;