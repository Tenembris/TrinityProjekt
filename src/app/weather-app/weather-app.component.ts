import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  WeatherData: any;
  Cityname: string;

  constructor() {}

  ngOnInit(): void {
    this.WeatherData = {
      main: {},
      isDay: true,
    };

    this.getWeatherData();
    console.log(this.WeatherData);
  }

  // onSubmit() {

  // }

  getWeatherData() {
    let name = (<HTMLInputElement>document.getElementById('search-city')).value;
    let local_name = localStorage.getItem('CityName');
    if (local_name != null) {
      name = local_name;
    } else {
      name = 'warsaw';
    }
    let NewName = (<HTMLInputElement>document.getElementById('search-city'))
      .value;
    console.log(NewName);
    if (NewName != local_name && NewName != '') {
      name = NewName;
      localStorage.setItem('CityName', NewName);
    }
    console.log('localname', local_name);
    console.log('name', name);
    console.log('NewName', NewName);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=01f44cc4921572c35fc77c09f4109dfa`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });

    // let data = JSON.parse(
    //   '{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}'
    // );
    // this.setWeatherData(data);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
}
