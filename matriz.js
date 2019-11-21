var a = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var b = ["Madrid", "Sevilla", "Barcelona", "Valencia", "Zaragoza", "Bilbao", "Donosti"];
var miercoles = [a[2],b[2]];
var siete = [a.pop(),b.pop()];
var tour =[
  [a.shift(),b.shift()],
  [a[0],b[0]],
  [miercoles],
  [a[2],b[2]],
  [a[3],b[3]],
  [a[4],b[4]],
  [siete],
];
alert(tour);
