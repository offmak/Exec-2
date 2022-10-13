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



//  forma simples trabalhar com valores de uma array ou mais onde usa o mesmo lugar da 1 com da segunda 

// const itensPerguntasERespostas = document.querySelectorAll(".item");

// itensPerguntasERespostas.forEach(function(item) {
//     item.addEventListener('click',function (){
//         item.classList.add("ativo");
//         const itemAtivoAtual = document.querySelector(".ativo");
//         itemAtivoAtual.classList.remove("ativo")
//     })
// })