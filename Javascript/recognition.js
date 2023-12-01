const recognition = new wekitSpeechRecognition()
recognition.lang ='es-ES'
recognition.continuous = true
recognition.onresult = Event =>{
    for (const result of Event.results){
        console.log(result[0].transcrip)
    }
}
recognition.start()