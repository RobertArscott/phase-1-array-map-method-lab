const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (title) {
    let hold = " ";
    let title1 = title.split("");
    let title2 = title1.map(function (letter){
      if (hold === " ") {
        hold = letter;
        return letter = letter.toUpperCase();
      }
      else{
        hold = letter;
        return letter;
      }
    });
    return title2.join("");
  })
}
