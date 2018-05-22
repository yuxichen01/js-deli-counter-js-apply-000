var katzDeli = [];
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return ('Welcome, ' + newPerson + '. You are number ' + katzDeli.length + ' in line.');
}

function takeANumber(line){
  var counter = 1;
  line.push(counter);
  counter++;
//  if (line.length === 1) {
//  for (i=0; i < line.length; i++)
  return ("Welcome. You're ticket number #" + counter);
  
}

// takeANumber(katzDeli) => 'Welcome. You're ticket number #1.' [1]
// takeANumber(katzDeli) => 'Welcome. You're ticket number #2.' [1,2]

// nowServing(katzDeli) => 'Currently serving: 1' [2]
// nowServing(katzDeli) => 'Currently serving: 2' []

// takeANumber(katzDeli) => 'Welcome. You're ticket number #3' [3]


function nowServing(line) {
  if (line.length === 0) {
    return ('There is nobody waiting to be served!');
  }else{
    return (`Currently serving ${line.shift()}.`);
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return ('The line is currently empty.');
  }else{
    var NameNumber = [];
    for (var i=0; i < line.length; i++) {
      NameNumber.push((i+1) + '. ' + line[i]);
    }
    return ('The line is currently: ' + NameNumber.join(', '));
  }
}