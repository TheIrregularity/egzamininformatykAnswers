(function() {
    let originalForm = document.getElementById('formegzamin');
    let formClone = originalForm.cloneNode(true);
    formClone.style.display = 'none';
    document.body.appendChild(formClone);

    let formData = new FormData(formClone);

    fetch(formClone.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'text/html'
        }
    })
    .then(response => response.text())
    .then(responseText => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(responseText, 'text/html');
        let correctAnswers = doc.querySelectorAll('.odpgood');
        let answerText = "Correct Answers:\n";

        correctAnswers.forEach(answer => {
            let questionNumber = answer.id.replace(/\D/g, '');
            let correctAnswer = answer.querySelector('strong').textContent.trim();
            answerText += `Question ${questionNumber}: ${correctAnswer}\n`;
        });

        console.log(answerText);
    })
    .catch(error => {
        console.error('Error during form submission:', error);
    });
})();
