let speech = new SpeechSynthesisUtterance()
let botaoFalar = document.querySelector("button")
let textarea = document.querySelector("textarea")
let vozes = []
let selecionarVoz = document.querySelector("select")

botaoFalar.addEventListener("click", () => {
    speech.text = textarea.value
    window.speechSynthesis.speak(speech)
})


window.speechSynthesis.onvoiceschanged = () => {
    vozes = window.speechSynthesis.getVoices()
    vozes.forEach((voz, i) => {
        selecionarVoz.options[i] = new Option(voz.name, i)

    })
}

selecionarVoz.addEventListener("change", () => {
    speech.voice = vozes[selecionarVoz.value]
})