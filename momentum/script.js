// DOM Elements
const time = document.querySelector('.time'),
    days = document.querySelector('.days'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // Output Time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Show day
function showDay() {
    let today = new Date(),
        week = today.getDay(),
        day = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();


    // Output day
    days.innerHTML = `${showWeekDay(week)}, ${showMonth(month)} ${day}, ${year}`;

}


// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//Show day
function showWeekDay(d) {
    switch (d) {
        case 1:
            d = 'Monday';
            break;
        case 2:
            d = 'Tuesday';
            break;
        case 3:
            d = 'Wednesday';
            break;
        case 4:
            d = 'Thursday';
            break;
        case 5:
            d = 'Friday';
            break;
        case 6:
            d = 'Saturday';
            break;
        case 0:
            d = 'Sunday';
            break;
        default:
            break;
    }
    return d;
}

//Show month
function showMonth(m) {
    switch (m) {
        case 0:
            m = 'January';
            break;
        case 1:
            m = 'February';
            break;
        case 2:
            m = 'March';
            break;
        case 3:
            m = 'April';
            break;
        case 4:
            m = 'May';
            break;
        case 5:
            m = 'June';
            break;
        case 6:
            m = 'July';
            break;
        case 7:
            m = 'August';
            break;
        case 8:
            m = 'September';
            break;
        case 9:
            m = 'October';
            break;
        case 10:
            m = 'November';
            break;
        case 11:
            m = 'December';
            break;
        default:
            break;
    }
    return m;
}

// Set Background and Greeting
function randomImg() {
    let arrayImg = [];
    while (arrayImg.length < 19) {
        let i = Math.floor(Math.random() * (20 - 1)) + 1;
        if (i < 10) { i = '0' + 1; }
        if (arrayImg.includes(i)) { continue; }
        arrayImg.push(i.toString());
    }
    return arrayImg;
}

const arrayImg = randomImg();

const slideLeft = document.querySelector('.slideLeft');
const slideRight = document.querySelector('.slideRight');

const date = new Date();
let hour = date.getHours();
let min1 = date.getMinutes();

function changeIndexBG(e) {

    if (e.target === slideRight || min1 === 0) {
        hour = Number(hour) + 1;
    } else if (e.target === slideLeft) {
        hour = Number(hour) - 1;
    }
    if (hour > 23) {
        hour = hour % 24;
    } else if (hour === -1) {
        hour = 23;
    }
    setBgGreet();

}




function setBgGreet() {
    const arrimg = arrayImg;
    const dateBG = new Date();
    let hourBG = dateBG.getHours();
    let hour1 = dateBG.getHours();

    if (hourBG !== hour) {
        hourBG = hour;
    }

    let srcImg = '';

    if (hourBG < 12 && hourBG >= 6) {
        // Morning
        srcImg = `assets/images/morning/${arrimg[hourBG%6]}.jpg`;


    } else if (hourBG < 18) {
        // Afternoon
        srcImg = `assets/images/day/${arrimg[hourBG%6]}.jpg`;


    } else if (hourBG <= 23) {
        // Evening
        srcImg = `assets/images/evening/${arrimg[hourBG%6]}.jpg`;


    } else {
        // Night
        srcImg = `assets/images/night/${arrimg[hourBG%6]}.jpg`;


    }
    //GREETING
    if (hour1 < 12 && hour1 >= 6) {
        greeting.textContent = 'Good Morning, ';
    } else if (hour1 < 18) {
        greeting.textContent = 'Good Afternoon, ';
    } else if (hour1 <= 23) {
        greeting.textContent = 'Good Evening, ';
    } else {
        greeting.textContent = 'Good Night, ';
    }

    const body = document.querySelector('body');
    const img = document.createElement('img');
    const src = srcImg;
    img.src = src;
    img.onload = () => {
        body.style.backgroundImage = `url(${src})`;
    };

    slideLeft.style.pointerEvents = 'none';
    slideRight.style.pointerEvents = 'none';

    setTimeout(function() {
        slideLeft.style.pointerEvents = 'auto';
        slideRight.style.pointerEvents = 'auto';
    }, 800);

}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name 
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if (name.textContent === '' || name.textContent === null || name.textContent.match(/\W/) || name.textContent.match(/[0-9]/)) {
                if (localStorage.getItem('name')) { name.innerText = localStorage.getItem('name'); } else { name.innerText = '[Enter Name]'; }
            } else {
                localStorage.setItem('name', e.target.innerText);
            }
            name.blur();
        }
    } else {
        if (name.textContent === '' || name.textContent === null || name.textContent.match(/\W/) || name.textContent.match(/[0-9]/)) {
            if (localStorage.getItem('name')) { name.innerText = localStorage.getItem('name'); } else { name.innerText = '[Enter Name]'; }
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if (focus.textContent === '' || focus.textContent === null) {
                if (localStorage.getItem('focus')) { focus.innerText = localStorage.getItem('focus'); } else { focus.innerText = '[Enter Focus]'; }
            } else {
                localStorage.setItem('focus', e.target.innerText);
            }
            focus.blur();
        }
    } else {
        if (focus.textContent === '' || focus.textContent === null) {
            if (localStorage.getItem('focus')) { focus.innerText = localStorage.getItem('focus'); } else { focus.innerText = '[Enter Focus]'; }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

//Block quote


const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

async function getQuote() {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const res = await fetch(url);
    const data = await res.json();
    let i = Math.floor(Math.random() * 100);
    if (data.quotes[i].quote.length > 100) {
        getQuote();
    } else {
        blockquote.textContent = data.quotes[i].quote;
        figcaption.textContent = data.quotes[i].author;
    }
}

//clear field to click
function clickClearN() {
    name.textContent = '';
}

function clickClearF() {
    focus.textContent = '';
}

// WEATHER

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

function getCity() {
    if (!(localStorage.getItem("city"))) {
        city.textContent = 'Enter City';
    } else {
        city.textContent = localStorage.getItem("city");
        document.querySelector('.error-city').style.display = "none";
        getWeather();
    }
}

function setCity(e) {
    document.querySelector('.error-city').style.display = "none";
    if (e.type === 'click') {
        city.innerText = '';
    }
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if (city.textContent === '' || !(city.textContent).match(/[a-zа-я]/)) {
                if (localStorage.getItem('city')) {
                    city.innerText = localStorage.getItem('city');
                } else {
                    city.innerText = "[Enter City]";
                }
            } else {
                localStorage.setItem('city', e.target.innerText);
                getWeather();
            }
            if (city.textContent === '') {
                city.innerText = "[Enter city]";
            } else {
                localStorage.setItem('city', e.target.innerText);
            }
            city.blur();
        }
    } else if (e.type === 'blur') {
        if (city.textContent === '' || !(city.textContent).match(/[a-zа-я]/)) {
            if (localStorage.getItem('city')) {
                city.innerText = localStorage.getItem('city');
            } else {
                city.innerText = "[Enter City]";
            }
        } else {
            city.innerText = localStorage.getItem('city');
        }
    }
}


const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&&lang=en&appid=ac9c43583866766e65ba2bc4a0d0f0ee&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind speed: ${data.wind.speed} m/sec`;
    } catch (e) {
        document.querySelector('.error-city').style.display = "inline-block";
    }
    setTimeout(getWeather, 100000);
}

//Listeners

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
name.addEventListener('click', clickClearN);
focus.addEventListener('click', clickClearF);
slideRight.addEventListener('click', changeIndexBG);
slideLeft.addEventListener('click', changeIndexBG);
btn.addEventListener('click', getQuote);
city.addEventListener('click', setCity);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);


// Run
showTime();
showDay();
setBgGreet();
getName();
getFocus();
getQuote();
getWeather();
getCity();