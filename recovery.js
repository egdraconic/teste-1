function tamanho() {
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
        document.querySelectorAll("button")[i].style = "width: 150px;"
    }
    document.querySelector(".botoes").style = "flex-direction: row;"
    sessionStorage.email = document.querySelector("#email").value
}

document.querySelector("#email-S").addEventListener("click", () => {
    if (document.querySelector("#email") == null) {
        document.querySelector(".recuperar").innerHTML = '<img src="assents/logo.svg" alt="logo cedus"><label for="email" class="texto">Digite o email da conta que esqueceu</label><input type="email" name="email" id="email" required><input type="hidden" name="escolha" class="tipo-R"><input type="submit" value="enviar email">'
        document.querySelector(".tipo-R").value = "email"
    } else {
        document.querySelector(".texto").innerHTML = 'Digite o email da conta que esqueceu'
        document.querySelector(".tipo-R").value = "email"
    }
    tamanho()
}) 

document.querySelector("#senha-S").addEventListener("click", () => {
    if (document.querySelector("#email") == null) {
        document.querySelector(".recuperar").innerHTML = '<img src="assents/logo.svg" alt="logo cedus"><label for="email" class="texto">Digite o email da conta que esqueceu a senha</label><input type="email" name="email" id="email" required><input type="hidden" name="escolha" class="tipo-R"><input type="submit" value="enviar email">'
        document.querySelector(".tipo-R").value = "senha"
    } else {
        document.querySelector(".texto").innerHTML = 'Digite o email da conta que esqueceu a senha'
        document.querySelector(".tipo-R").value = "senha"
    }

    tamanho()
}) 
