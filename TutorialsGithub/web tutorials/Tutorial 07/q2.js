function calculateMarks() {
   
    const markInput = document.getElementById('mark');
    const mark = parseInt(markInput.value);

   
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Please enter a valid mark (between 0 and 100).");
        return;
    }

   
    const marksArray = [];

    
    marksArray.push(mark);

 
    while (marksArray.length < 5) {
        const additionalMark = parseInt(prompt(`Enter mark ${marksArray.length + 1}:`));


        if (isNaN(additionalMark) || additionalMark < 0 || additionalMark > 100) {
            alert("Please enter a valid mark (between 0 and 100).");
            return;
        }

        marksArray.push(additionalMark);
    }

   
    const total = marksArray.reduce((acc, curr) => acc + curr, 0);
    const average = total / marksArray.length;

    
    alert(`Total marks: ${total}\nAverage marks: ${average.toFixed(2)}`);

  
    if (average > 30) {
        alert("Congrats! You passed.");
    } else {
        alert("Better luck next time.");
    }
}