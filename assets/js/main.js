function myAge() {
  return 26
}

function countDownCanada() {
    var departure = new Date('August 11, 2019 12:00:00');
    var now = Date.now();
    return Math.floor((Date.UTC(departure.getFullYear(), departure.getMonth(), departure.getDate())
        - now ) /(1000 * 60 * 60 * 24));
}
