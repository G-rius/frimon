
//speak capability
let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("voice-change");


window.onload = () => { 
    const readout = (message) =>{
    const speech = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    speech.voice = allVoices[2];
    speech.volume = 0.0;
    speech.rate = 1.5;
    speech.pitch = 1.9;
    speech.text = message;
    
    window.speechSynthesis.speak(speech);
    }
    setInterval(readout("Helloo , my name is Frimon. How can i help you today?"),1000);
    
}



window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

   // voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

/*voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]

});*/









