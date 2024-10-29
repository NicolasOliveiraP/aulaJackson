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
    let usuario = document.getElementById("user").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não cadastrado");
    }
    else{
        alert("Bem-vindo");
    }
    document.getElementById("user").value = null;
}


function existe(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return true;
        }
        else{
            return false;
        }
    }
   }

