function generateAdvice(id, newAdvice) {
    const adviceID = document.getElementById('adviceID')
    const advice = document.getElementById('advice')
   
    adviceID.innerText = `Advice #${id}`
    advice.innerText = '"' + newAdvice + '"'
}

test = () => {
    fetch('https://api.adviceslip.com/advice')
    .then (response => (response.json()))
    .then (data => generateAdvice(data.slip.id, data.slip.advice))
      
}