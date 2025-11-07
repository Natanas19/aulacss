
// teste crud

// const dinossauro = {
//     nome: 'Rex',
//     altura: '6'
// }

const dinossauros = []

// dinossauros.push(dinossauro)

// document.getElementById('dino').innerHTML = `Nome: ${dinossauros[0].nome}; Altura: ${dinossauros[0].altura}`

function cadastrarDino(){
    let nomeLido = document.getElementById('inputNome').value
    let alturaLida = Number(document.getElementById('inputAltura').value)

    const dino = {
        nome: nomeLido,
        altura: alturaLida
    }
    dinossauros.push(dino)

    console.log(dinossauros);
    
    limparForm()
    alert("Dino cadastrado com sucesso!")
    
}

function limparForm(){
    document.getElementById('inputNome').value = ''
    document.getElementById('inputAltura').value = ''
    // document.getElementById('inputPesoOuMassa').value = ''
    
    document.getElementById('inputNome').focus()
}

// document.getElementById('menuDinos').innerHTML = `TESTE`

function mostrarTodosDinos(){
    // document.getElementById('painelDinos').innerHTML = ''
    for(let i = 0; i < dinossauros.length; i++){
        document.getElementById('painelDinos').innerHTML += `
        <div class="cardGenerico">
        nome: ${dinossauros[i].nome} - Altura: ${dinossauros[i].altura} <br>
        </div>
    `
    }
}