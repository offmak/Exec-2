const perguntasResposta = document.querySelectorAll(".itemAuto");


perguntasResposta.forEach(function (item){
    item.addEventListener("click", function (){
        const ativadoDesativado  = document.querySelector(".ativado");

        if(ativadoDesativado){
            ativadoDesativado.classList.remove("ativado")
       
        }
        item.classList.add("ativado")
    })
})




