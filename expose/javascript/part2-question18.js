function returnTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(returnTime, 1000);