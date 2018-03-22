// get next Sunday
var nextSunday = moment().day(7).format("YYYY-MM-DDT11:00:00Z");

// make it a moment object again
var event = moment(nextSunday);

// get current time/date
var current = moment();

// get difference between event and current
var diffTime = event.diff(current);

// let moment.js make the duration out of the timestamp
var duration = moment.duration(diffTime, 'milliseconds', true);

// set interval to milliseconds
var interval = 1000;


setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
  $('#clock').html(
      "<div class=\'days cell\' style=\'color: #3b3f40;\'>"+duration.days()+"<span style=\'color: #babcbe;\'>дні</span></div>" +
      "<div class=\'hours cell\' style=\'color: #3b3f40;\'>"+duration.hours()+"<span style=\'color: #babcbe;\'>год</span></div>" +
      "<div class=\'mins cell\' style=\'color: #3b3f40;\'>"+duration.minutes()+"<span style=\'color: #babcbe;\'>хв</span></div>" +
      "<div class=\'secs cell\' style=\'color: #3b3f40;\'>"+duration.seconds()+"<span style=\'color: #babcbe;\'>сек</span></div>")
}, interval);


