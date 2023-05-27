//0c204b7ecb29ab46f055a83012b9115f   내 api key
const API_KEY = '0c204b7ecb29ab46f055a83012b9115f';
    

//getCurrentPostion을 성공했을 때 호출 함수
function onGeoOk(position){
    const Loading = document.querySelector('#getloading');
    Loading.className = 'hidden';
    const lat =position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;  //&units=metric을 넣으면 화씨온도를 섭씨로 표시해주는등 인간이 보기 편하게 바꿔줌.
    fetch(url).then(response => response.json()).then(data => {
        const Country = document.querySelector("#country");
        const City = document.querySelector('#city')
        const Mtemp = document.querySelector('#maxtemp');
        const Ntemp = document.querySelector('#nowtemp');
        const mtemp =document.querySelector('#mintemp');
        const Bweather = document.querySelector('#bigweather');
        const Dweather = document.querySelector('#detailweather');
        Country.innerHTML= data.sys.country;
        City.innerHTML = data.name;
        Mtemp.innerHTML = `${data.main.temp_max}`+"&degc";
        Ntemp.innerHTML = `${data.main.temp}`+"&degc";
        mtemp.innerHTML = `${data.main.temp_min}`+"&degc";
        Bweather.innerHTML = data.weather[0].main;
        Dweather.innerHTML = data.weather[0].description;
    }) ;
}

//getCurrentPostion을 실패했을 때 호출 함수
function onGeoError(){         
    const Loading = document.querySelector('#getloading');
    Loading.className = 'hidden';               
    alert("위치정보를 가져오는데 실패했습니다.");
    const Weather = document.querySelector('#weather');
    Weather.className= 'hidden';
    const Placebox = document.querySelector('#placebox');
    const Warnning = document.createElement('h3');
    Warnning.innerText = 'Failed to get location information.';
    Warnning.style='color:red; text-align: center; margin-top:17px;';
    Placebox.appendChild(Warnning);

}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);