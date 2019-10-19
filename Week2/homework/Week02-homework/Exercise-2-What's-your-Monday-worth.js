const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function timeCounter(tasksArray){
const workDurations = [];
tasksArray.map(workTime => {if(workTime.hasOwnProperty('duration') === true && typeof workTime.duration === 'number') 
{return workDurations.push(workTime.duration)}});
let totalEarn = 0;
workDurations.map(times => totalEarn = totalEarn + (times * 25 / 60));
console.log('You will earn €' + totalEarn);

}
timeCounter(mondayTasks);