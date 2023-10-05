var leapYear = function (year) {
  var result = +year;
  if (isNaN(result) || year == null) {
    console.log(`This is Invalid data:- ${year}`);
  } else {
    if (year % 2 == 0) {
      console.log(`This is Leap Year:- ${year}`);
    } else {
      console.log(`This is not Leap Year:-${year}`);
    }
  }
};

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
