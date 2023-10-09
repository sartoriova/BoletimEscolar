var entrada = document.querySelector("input[name=entrada]")
var qtd_alunos = parseInt(entrada.value)
var div = document.querySelector("#div")
var tbody = document.createElement("tbody") 

document.querySelector("form").addEventListener("submit", verificaEntrada)
document.querySelector("#button_cadastrar").addEventListener("click", verificaEntrada) //para poder ir com um clique também!!

function verificaEntrada(e){
    e.preventDefault();
    qtd_alunos = parseInt(entrada.value)
    if ( (isNaN(qtd_alunos)) || (qtd_alunos == 0)  ) {
        window.alert("Ops! Nenhuma quantidade foi informada :( \nPor favor, informe uma quantidade no seu respectivo campo!")
        div.innerHTML = ""
    }else if (qtd_alunos < 0){
        window.alert("Ops! Quantidade invalida (número negativo) :( \nPor favor, informe uma quantidade válida no seu respectivo campo!")
        div.innerHTML = ""
    }
    else {
        document.querySelector("input[name=entrada]").value = ""
        preencheDiv(qtd_alunos)
    }
}

function gerarNumeroAleatorio() {
    let n = (Math.random() * 101)/10;
    if(n > 10) {
      return 10;
    }
    return n.toFixed(2);
}


function preencheDiv(inteiro) {
    div.innerHTML = ""
    tbody.innerHTML = ""

    let button_adc = document.createElement("input")
    button_adc.setAttribute("type", "button")
    button_adc.setAttribute("value", "Adicionar")
    button_adc.addEventListener("click", adicionaAluno)
    button_adc.style.marginLeft="600px"
    button_adc.style.color="white"
    button_adc.style.backgroundColor="black"
    button_adc.style.borderRadius="10px"
    button_adc.style.padding="10px"
    button_adc.style.fontWeight="bold"
    button_adc.style.fontSize="15px"
    button_adc.style.borderColor="black"

    let button_rem = document.createElement("input")
    button_rem.setAttribute("type", "button")
    button_rem.setAttribute("value", "Remover")
    button_rem.addEventListener("click", removeAluno)
    button_rem.style.marginLeft="10px"
    button_rem.style.color="white"
    button_rem.style.backgroundColor="hotpink"
    button_rem.style.borderRadius="10px"
    button_rem.style.padding="10px"
    button_rem.style.fontWeight="bold"
    button_rem.style.fontSize="15px"
    button_rem.style.borderColor="hotpink"

    div.appendChild(button_adc)
    div.appendChild(button_rem)

    let table = document.createElement("table")
    table.classList.add("table")
    table.classList.add("table-hover")
    table.classList.add("my-3")
    table.classList.add("text-center")

    let thead = document.createElement("thead")
    let tr_head = document.createElement("tr")
    let th_nome = document.createElement("th")
    let th_nota1 = document.createElement("th")
    let th_nota2 = document.createElement("th")
    let th_nota3 = document.createElement("th")
    let th_media = document.createElement("th")
    let th_resultado = document.createElement("th")
    
    th_nome.innerHTML = "<h3>Nome</h3>"
    th_nota1.innerHTML = "<h3>Nota 1</h3>"
    th_nota2.innerHTML = "<h3>Nota 2</h3>"
    th_nota3.innerHTML = "<h3>Nota 3</h3>"
    th_media.innerHTML = "<h3>Média</h3>"
    th_resultado.innerHTML = "<h3>Resultado</h3>"

    tr_head.appendChild(th_nome)
    tr_head.appendChild(th_nota1)
    tr_head.appendChild(th_nota2)
    tr_head.appendChild(th_nota3)
    tr_head.appendChild(th_media)
    tr_head.appendChild(th_resultado)

    thead.appendChild(tr_head)
    table.appendChild(thead)

    for (let cont = 0; cont < inteiro; cont++){
        let tr_body = document.createElement("tr")
        let td_nome = document.createElement("td")
        let td_nota1 = document.createElement("td")
        let td_nota2 = document.createElement("td")
        let td_nota3 = document.createElement("td")
        let td_media = document.createElement("td")
        let td_resultado = document.createElement("td")
        let nota1 = parseFloat( gerarNumeroAleatorio() )
        let nota2 = parseFloat( gerarNumeroAleatorio() )
        let nota3 = parseFloat( gerarNumeroAleatorio() )
        let media = ( (nota1+nota2+nota3)/3 ).toFixed(2)

        td_nome.innerText = `Aluno ${cont}`

        td_nota1.innerText = nota1
        if(nota1 >= 6){
            td_nota1.style.color="blue"
        }else{
            td_nota1.style.color="red"
        }

        td_nota2.innerText = nota2
        if(nota2 >= 6){
            td_nota2.style.color="blue"
        }else{
            td_nota2.style.color="red"
        }

        td_nota3.innerText = nota3
        if(nota3 >= 6){
            td_nota3.style.color="blue"
        }else{
            td_nota3.style.color="red"
        }

        td_media.innerText = media
        if(media >= 6){
            td_media.style.color="blue"
        }else{
            td_media.style.color="red"
        }

        if(media >= 6){
            td_resultado.innerText = "Aprovado"
            td_resultado.style.color = "blue"
        }else if(media < 4){
            td_resultado.innerText = "Reprovado"
            td_resultado.style.color = "red"
        }else if( (media >=4) && (media < 6) ){
            td_resultado.innerText = "Em recuperação"
            td_resultado.style.color = "green"
        }

        tr_body.appendChild(td_nome)
        tr_body.appendChild(td_nota1)
        tr_body.appendChild(td_nota2)
        tr_body.appendChild(td_nota3)
        tr_body.appendChild(td_media)
        tr_body.appendChild(td_resultado)

        tbody.appendChild(tr_body)
    }
    table.appendChild(tbody)
    div.appendChild(table)
}

function adicionaAluno(){
   qtd_alunos++

   let tr_body = document.createElement("tr")

   let nota1 = parseFloat( gerarNumeroAleatorio() )
   let nota2 = parseFloat( gerarNumeroAleatorio() )
   let nota3 = parseFloat( gerarNumeroAleatorio() )
   let media = ( (nota1+nota2+nota3)/3 ).toFixed(2)

   let td_nome = document.createElement("td")
   let td_nota1 = document.createElement("td")
   let td_nota2 = document.createElement("td")
   let td_nota3 = document.createElement("td")
   let td_media = document.createElement("td")
   let td_resultado = document.createElement("td")

   td_nome.innerText = `Aluno ${qtd_alunos-1}`

   td_nota1.innerText = nota1
    if(nota1 >= 6){
        td_nota1.style.color="blue"
    }else{
        td_nota1.style.color="red"
    }

    td_nota2.innerText = nota2
    if(nota2 >= 6){
        td_nota2.style.color="blue"
    }else{
        td_nota2.style.color="red"
    }

    td_nota3.innerText = nota3
    if(nota3 >= 6){
        td_nota3.style.color="blue"
    }else{
        td_nota3.style.color="red"
    }

    td_media.innerText = media
    if(media >= 6){
        td_media.style.color="blue"
    }else{
        td_media.style.color="red"
    }

    if(media >= 6){
        td_resultado.innerText = "Aprovado"
        td_resultado.style.color = "blue"
    }else if(media < 4){
        td_resultado.innerText = "Reprovado"
        td_resultado.style.color = "red"
    }else if( (media >=4) && (media < 6) ){
        td_resultado.innerText = "Em recuperação"
        td_resultado.style.color = "green"
    }

    tr_body.appendChild(td_nome)
    tr_body.appendChild(td_nota1)
    tr_body.appendChild(td_nota2)
    tr_body.appendChild(td_nota3)
    tr_body.appendChild(td_media)
    tr_body.appendChild(td_resultado)

    tbody.appendChild(tr_body)
}

function removeAluno(){
    let ultimo = document.querySelectorAll("tr").length - 1
    let ultimo_tr = document.querySelectorAll("tr")[ultimo]

    tbody.removeChild(ultimo_tr)

    if(ultimo == 1){
        div.innerHTML = ""
    }
}