const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

startClock = () => {
    var day = new Date();
    var hour = day.getHours() * 30;
    var minute = day.getMinutes() * 6;
    var second = day.getSeconds() * 6;
    
    
    hr.style.transform = `rotateZ(${hour + minute/12}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;

}

setInterval(startClock, 1000);

