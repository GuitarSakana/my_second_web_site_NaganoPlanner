const pickturList = [
    "mainBackgroundimg.jpg"   
];

const randomchoice = Math.floor(Math.random()*pickturList.length);
const bgImage = document.createElement('img');
bgImage.id = "backgroundimg";
bgImage.src = "usepicture/"+pickturList[randomchoice];

document.body.style.backgroundImage="url('"+bgImage.src+"')";



// 날씨 정보 사이즈가 40px을 넘으면 display:none이 되게 작동
const detailWeatherElement = document.getElementById('detailweather');
if (detailWeatherElement.offsetHeight > 40) {
  detailWeatherElement.classList.add('height-limit');
}
