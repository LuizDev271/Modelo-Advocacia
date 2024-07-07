let caixaTopo = document.getElementById("caixa_topo")
let sobre = document.getElementById("sobre")
let serv = document.getElementById("servicos")
let time = document.getElementById("time")
let form = document.getElementById("form")

let rolagem = 0


function entradaSite(){
    caixaTopo.classList.remove('invis-topo')
    caixaTopo.classList.add('visi-topo')
}

function aparecerSections(){
    
    rolagem = scrollY
    console.log(rolagem)

    if(rolagem >= 900){
        serv.classList.remove('invis-section')
        serv.classList.add('visi-section')
    }

    if(rolagem >= 2000){
        time.classList.remove('invis-section')
        time.classList.add('visi-section')
    }

}





