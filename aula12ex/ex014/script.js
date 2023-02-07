function carregar() { // ancora com o onload no HTML
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'manha2.png' // selecionar a imagem
        document.body.style.background = '#e2cd9f' // mudar a cor do fundo
    } else if (hora >= 12 && hora <= 18 ){
        // BOA TARDE!
        img.src = 'tarde2.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'noite2.png'
        document.body.style.background = '#515154'
    }
}
