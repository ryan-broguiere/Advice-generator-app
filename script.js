function changeText(id, newAdvice) {
    const adviceID = document.getElementById('adviceID')
    const advice = document.getElementById('advice')
   
    adviceID.innerText = `Advice #${id}`
    advice.innerText = '"' + newAdvice + '"'
}

generateAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then (response => (response.json()))
    .then (data => changeText(data.slip.id, data.slip.advice))      
}

generateAdvice() //default 