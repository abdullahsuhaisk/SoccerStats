const dates = [
  {
    id: 0,
    dayName: 'Pazt',
    day: 1
  },
  {
    id: 1,
    dayName: 'Salı',
    day: 2
  },
  {
    id: 2,
    dayName: 'Çrşb',
    day: 3
  },
  {
    id: 3,
    dayName: 'Perşmb',
    day: 4
  },
  {
    id: 4,
    dayName: 'Cuma',
    day: 5
  },
  {
    id: 5,
    dayName: 'Cmrtesi',
    day: 6
  },
  {
    id: 6,
    dayName: 'Pazar',
    day: 0
  }
]

function GetFormattedDate(date) {
  const todayTime = date ? new Date(date) : new Date();
  let month = (todayTime.getMonth() + 1);
  let day = (todayTime.getDate());
  const year = (todayTime.getFullYear());
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  const formatter = new Intl.DateTimeFormat('tr', { month: 'long' });
  const monthName = formatter.format(todayTime);

  return {
    formattedDate: month + "/" + day + "/" + year,
    dayName: dates.find((item) => item.day === todayTime.getDay())?.dayName,
    dayDate: todayTime.getDate(),
    monthName: monthName,
    year: year
  };
}

function getNextDay(dayCount) {
  var dateOffset = (24 * 60 * 60 * 1000) * dayCount;
  var myDate = new Date();
  myDate.setTime(myDate.getTime() + dateOffset);
  return GetFormattedDate(myDate)
}

export function getNext5days(){
  let i = 0
  const dayArray = []
  while (i < 5) {
    dayArray.push(getNextDay(i))
    i++;
  }
  return dayArray;
}