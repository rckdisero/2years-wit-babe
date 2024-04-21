var senha = "isa";

function passcheck() {
    if(document.getElementById('pass').value != senha) {
        alert('Nome errado ou pessoa errada.');
    return false;
    }
    if(document.getElementById('pass').value == senha) {
        alert('Senha correta.');
    }
}