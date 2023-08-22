var timezone =document.getElementById("timezone")
var days =document.getElementById("days")
var number =document.getElementById("number")
var cityname =document.getElementById("cityname")
var percentage =document.getElementById("percentage")
var speed =document.getElementById("speed")
var direction =document.getElementById("direction")
var sunny =document.getElementById("sunny")
var cold =document.getElementById("cold")
var month =document.getElementById("month")
var search =document.getElementById("search")




// Day 2

var timezoneday2=document.getElementById("timezoneday2")
var numbertemp =document.getElementById("numbertemp")
var sunnyday2=document.getElementById("sunnyday2")


//Day 3
var timezoneday3=document.getElementById("timezoneday3")
var numberday3 =document.getElementById("numberday3")
var sunnyday3=document.getElementById("sunnyday3")




// get api
async function getapi(city){
var api =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c97afb4fd14a4b3a826152536232108&q=${city}&days=7`)
   
    var response =await api.json();
    return response
}
//display today
 function displaytoday(today){
    var daydate=new Date()
    timezone.innerHTML=daydate.toLocaleDateString("en-us",{weekday:"long"})
    days.innerHTML=daydate.getDate()
    month.innerHTML=daydate.toLocaleDateString("en-us",{month:"long"})
  cityname.innerHTML=today.location.name
  number.innerHTML=today.current.temp_c+" C"
  sunny.innerHTML=today.current.condition.text
  //cold.setAttribute("src",today.current.condition.icon)
  percentage.innerHTML=today.current.humidity+"%"
  speed.innerHTML=today.current.wind_kph+"km/h"
  direction.innerHTML=today.current.wind_dir
}

function displayday2(today){
    numbertemp.innerHTML=today.forecast.forecastday[1].day.maxtemp_c
    sunnyday2.innerHTML=today.forecast.forecastday[2].day.condition.text
    var nextday=new Date(today.forecast.forecastday[1].date)
    timezoneday2.innerHTML=nextday.toLocaleDateString("en-us",{weekday:'long'})
}
//Display Day 3
function displayday3(today){
    numberday3.innerHTML=today.forecast.forecastday[3].day.maxtemp_c
    sunnyday3.innerHTML=today.forecast.forecastday[3].day.condition.text
    var nextday2=new Date(today.forecast.forecastday[2].date)
    timezoneday3.innerHTML=nextday2.toLocaleDateString("en-us",{weekday:'long'})

}

// start api
async function start(nameofcity="london"){
  let response=await getapi(nameofcity)
  displaytoday(response)
  displayday2(response) 
  displayday3(response)
}
start()

search.addEventListener("input",function(){
  start(search.value)

})