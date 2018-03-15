module.exports = {
  simplifySkyCode: function (code) {
    code = parseInt(code);

    if (
      code === 0 ||
      code === 1 ||
      code === 2 ||
      code === 3 ||
      code === 4 ||
      code === 17 ||
      code === 35
    ) {
      return 'thunderStorm';
    } else if (
      code === 10 ||
      code === 40 ||
      code === 18 ||
      code === 12 ||
      code === 45 ||
      code === 39
    ) {
      return 'rain';
    } else if (
      code === 5 ||
      code === 6 ||
      code === 7 ||
      code === 13 ||
      code === 14 ||
      code === 15 ||
      code === 16 ||
      code === 42 ||
      code === 43 ||
      code === 46 ||
      code === 41
    ) {
      return 'snow';
    } else if (
      code === 31 || code === 32 || code === 36
    ) {
      return 'sunny';
    } else {
      return 'cloudy';
    }
  }
}