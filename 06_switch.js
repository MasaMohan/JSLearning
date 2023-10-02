var display = function (dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Mon`);
      break;
    case 2:
      console.log(`Tue`);
      break;
    case 3:
      console.log(`wed`);
      break;
    case 4:
      console.log(`Thru`);
      break;
    case 5:
      console.log(`fri`);
      break;
    case 6:
      console.log(`sat`);
      break;
    case 7:
      console.log(`sun`);
      break;

    default:
      console.log(`Invalid Data ${dayNum}`);
      break;
  }
}
display(1);
display(2);
display(3);
display(4);
display(5);
display(6);
display(7);
display(44);

