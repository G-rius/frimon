
//speak capability
let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("voice-change");


window.onload = () => { 
    const readout = (message) =>{
    const speech = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    speech.voice = allVoices[2];
    speech.volume = 1;
    speech.text = message;
    window.speechSynthesis.speak(speech);
    }
    setInterval(readout("Hello and welcome, my name is Frimon"),1000);
    
}


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]

});


document.querySelector(".top-left").addEventListener("click", () =>{
    const allVoices = speechSynthesis.getVoices();
    speech.voice = allVoices[2];
    speech.volume = 1;
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})







