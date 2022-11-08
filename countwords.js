function countWords() {
  var text = document.getElementById('myText').value;
  var output = document.getElementById('output');
  var counts = {};
  var keys = [];

  var tokens = text
    .toLowerCase()
    .replace(/[^\w ]/g, '')
    .split(/ +/);

  if (text) {
    for (var i = 0; i < tokens.length; i++) {
      var word = tokens[i];
      if (!/\s\d+/.test(word)) {
        if (counts[word] === undefined) {
          counts[word] = 1;
          keys.push(word);
        } else {
          counts[word] = counts[word] + 1;
        }
      }
    }
  } else {
    return text;
  }

  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }

  let message = '<table><thead><tr><th>Word<th>Count</thead></tr><tbody>';
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    message += '<tr><td>' + key + '<td>' + counts[key] + '</tr>';
  }
  message += '</tbody></table>';

  output.innerHTML = message;
}

document.getElementById('freq').addEventListener('click', countWords);
