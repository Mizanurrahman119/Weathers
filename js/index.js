const API_KEY = `9cdd3bb78fa2e7ef051fd1bb035db1c9`;
const searchedTemperature = () => {
    const city = document.getElementById('citys-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch (url)
    .then(res => res.json())
    .then ( data => displayTemperatured(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperatured = temperature => {
    setInnerText('citys', temperature.name);
    setInnerText('temperatured', temperature.main.temp);
    setInnerText('clouders', temperature.weather[0].main);
}