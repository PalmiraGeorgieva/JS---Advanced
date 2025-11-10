function solve(stepsCount, footprint, speed){
    let distanceInMeter = stepsCount * footprint;
    let speedSec = speed / 3.6;
    let time = distanceInMeter / speedSec;
    let breakTime = Math.floor(distanceInMeter/500);

    let timeInM = Math.floor(time/60);
    let timeInSec = time - timeInM * 60;
    timeInM += breakTime
    let hours = Math.floor(timeInM / 60);

    let timeHours = hours < 10 ? `0${hours}` : `${hours}`
    let mins = timeInM < 10 ? `0${timeInM}` : `${timeInM}`
    let sec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`
    

    console.log(`${timeHours}:${mins}:${Math.ceil(sec)}`)


}
solve(2564, 0.70, 5.5)