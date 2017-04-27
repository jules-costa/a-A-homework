let callback = function(names) {
  names.forEach(name => console.log(name));
}

function titleize(names, callback) {
  let new_arr = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(new_arr)
}

titleize(["Mary", "Brian", "Leo"], callback);



function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}
Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!'`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}
Elephant.prototype.play = function() {
  let trick = this.tricks[Math.round(Math.random())]
  console.log(`${this.name} is ${trick}!`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// Why not define paradeHelper on prototype? How to pass this to forEach?
Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is running by!`);
}

herd.forEach(elephant => paradeHelper(elephant));





function dinerBreakfast() {
  let order = 'scrambled eggs and bacon';
  console.log(order);

  return function (morefood) {
    order += `and ${morefood}`;
    console.log(`I'd like ${order} please.`);
  };
};

//SOLUTION

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function(food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};

dinerBreakfast();
