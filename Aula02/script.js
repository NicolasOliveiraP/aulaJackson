let bancoDeDados = []
function add(){
    let usuario = {
        username: document.getElementById("username").value.toUpperCase(),
        password: document.getElementById("senha").value
    };
    if(existe(usuario.username) == false){
        bancoDeDados.push(usuario);
        alert("Usuário Cadastrado com Sucesso!");
        document.getElementById("username").value = null;
        document.getElementById("senha").value = null;
    } else{
        alert("Usuário Já Está Cadastrado!");
    }
}
function login(){
    let usuario = document.getElementById("user").value.toUpperCase();
    let senha = document.getElementById("pass").value
    if(autentica(usuario, senha) == false){
        alert("Falha de autenticação =/");
    }
    else{
        alert("Bem-vindo ao sistema :p");
    }
    document.getElementById("user").value = null;
    document.getElementById("pass").value = null;
}

function remove() {
    let username = document.getElementById("UserDelete").value
    let pos = indexOfByUis(username)
    if(pos != -1){
        bancoDeDados.splice(pos, 1)
        alert(username + " foi removido com sucesso!")
    }else{
        alert(usuario + " não foi encontrado!")
    }
}


function existe(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return true;
        }
    }
    return false;
   }

function autentica(username, password){
    for(let usuario of bancoDeDados){
        alert("Cheguei")
        if(usuario.username == username && usuario.password == password){
            return true;
        }
    }
    return false;
   }

function indexOfByUis(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return bancoDeDados.indexOf(usuario);
        }
    }
    return -1;
}