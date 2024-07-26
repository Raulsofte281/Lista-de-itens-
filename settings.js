let indiceDaLista = 0
 
    function adicionarItem() {
        const inputDoUsuario = document.getElementById('texto-do-usuario')
        const textoDigitado = inputDoUsuario.value
        if(textoDigitado.length == 0){
            alert('Insira algo')
            return textoDigitado
        }
        inputDoUsuario.value = ''
 
        const lista = document.getElementById('lista')

        lista.innerHTML += `
        <li id="item-${indiceDaLista}">
        <input type="checkbox" name="item-${indiceDaLista}" class="checkbox" id="item-${indiceDaLista}">
        ${textoDigitado} <img src="x-solid.svg" onclick="remover(${indiceDaLista})"  class="item-${indiceDaLista}">
        </li>`;
 
        indiceDaLista++
    }



    function remover(indice) {
        const produto = document.getElementById(`item-${indice}`);
        produto.remove();
    }