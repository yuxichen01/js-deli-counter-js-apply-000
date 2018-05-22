var katzDeli = [];
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return ('Welcome, ' + newPerson + '. You are number ' + katzDeli.length + ' in line.');
}
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