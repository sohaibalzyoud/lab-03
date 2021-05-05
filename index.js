
var favouriteMovie=prompt('what do you like more harry potter or lord of the rings?');

if(favouriteMovie=='harry potter'){
  document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px">');
}else if(favouriteMovie === 'lord of the rings'){
  document.write('<img src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg" width="250px">');
}else{
  document.write('<h3> please only write harry potter or lord of the rings next time</h3>');
}


var age=prompt('whats your age?');

if(age == 30){
  console.log('you are 30')
}

