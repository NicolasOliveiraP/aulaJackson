let bancoDeDados = []
function add(){
    let usuario = document.getElementById("username").value
    if(existe(usuario) == false){
        bancoDeDados.push(usuario.toUpperCase())
        alert("Usuário Cadastrado com Sucesso!")
        document.getElementById("username").value = null
    }
    else{
        alert("Usuário Já Está Cadastrado!")
    }
}
function login(){
    let usuario = document.getElementById("user").value
    if(existe(usuario) == false){
        alert("Usuário não cadastrado")
    }
    else{
        alert("Bem-vindo")
    }
    document.getElementById("user").value = null
}

function remove(){
    let usuario = document.getElementById("userDelete").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    /*for(let cad of bancoDeDados){
        if(cad.toUpperCase() == usuario.toUpperCase()){
            pos = bancoDeDados.indexOf(cad)
            break
        }
    }*/
    if(pos == -1){
        alert("Sem Registro de Usuário!")
    }
    else{
        bancoDeDados.splice(pos, 1)
        alert("Usuário " +usuario +" foi Removido!")
    }
    document.getElementById("userDelete").value = null
}

function edit() {
    let username = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado no banco de dados!")
    }else{
        let novoValor = prompt("Digite o novo valor").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário alterado com sucesso!");
    }
    document.getElementById("userEdit").value = null;
}

function existe(username){
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        return false;
    }else{
        return true;
    }
}