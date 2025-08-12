let friends = [];
let index = 0;

function addFriends(){
    let amigo = document.getElementById("amigo").value;
    if(!amigo){
        alert("Por favor, informe pelo menos um nome.")
        return
    }

    let amigoItem = {
        id: index,
        texto: amigo
    };
    index++;
    friends.push(amigoItem);
    document.getElementById("amigo").value = "";
    friendsList();
}

function friendsList() {
    let ul = document.getElementById("listaAmigos");
    let html = "";

    if (friends.lenght === 0){
        html = "<li>Você ainda não adicionou nenhum amigo.</li>";
    }else{

    friends.forEach( (item) => {
        console.log(index)
        html += `<li>
            ${item.texto} <button class="button-add" onclick="deleteFriend(${item.id})">Excluir
            </button>
        </li>`;
    });
    }
    ul.innerHTML = html;
}

function deleteFriend(id){
    friends = friends.filter(amigoItem => amigoItem.id !== id);
    friendsList();
}

function shuffleFriends(){
    if (friends.length < 2) {
        alert("Por favor, informe pelo menos 2 amigos antes de sortear.")
        return
    }

    let shuffledFriends = [...friends];

    for (let i = shuffledFriends.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledFriends[i], shuffledFriends[j] = shuffledFriends[j], shuffledFriends[i]]; 
    }

    result(shuffledFriends[0]);
}

function result(winner){
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>${winner.texto}</li>`;
}