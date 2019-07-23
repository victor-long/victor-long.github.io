function myAge() {
  return 26
}

function countDownCanada() {
    var departure = new Date('August 11, 2019 12:00:00 GMT+0200');
    var now = new Date();

    var diff = Date.UTC(departure.getFullYear(),
                        departure.getMonth(),
                        departure.getDate(),
                        departure.getHours(),
                        departure.getMinutes())
        - Date.UTC(now.getFullYear(),
                   now.getMonth(),
                   now.getDate(),
                   now.getHours(),
                   now.getMinutes())
    var diff_days = Math.floor(diff /(1000 * 60 * 60 * 24))
	console.log(diff - diff_days * (1000 * 60 * 60 * 24))
    var diff_hours = Math.floor((diff - diff_days * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    return [diff_days, diff_hours];
}
