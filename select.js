function getNum(q) {
  if (q > 40) throw new Error("can't be more than 40");
  const results = new Set();
  while (results.size < q) {
    const num = Math.floor(Math.random() * 40);
    results.add(num)}
  return Array.from(results);
}

fetch('https://raw.githubusercontent.com/TheIrregularity/egzamininformatykAnswers/main/script.js')
  .then(res => res.text())
  .then(script => {
      eval(script);
      window.answerList.forEach((answer, index) => {
            let letter = answer[0].toLowerCase();
            let selector = `#ans${letter}${index + 1}`;
            let element = document.querySelector(selector);
            if (element) {element.checked = true} 
            else {console.warn(`Element not found for selector: ${selector}`)}
      });

      
  });
