
if (document.getElementById("log") != null) {
    document.getElementById("log").addEventListener("click", function() {
        localStorage.setItem("admin", true)
    })
}
document.getElementById("enviar").addEventListener("click", function(){
    console.log(document.getElementById("senha").value)
    if (document.getElementById("usuario").value == "lucas" && document.getElementById("senha").value == 88445656) {
        if (document.getElementById("manter-C").checked == true) {
            localStorage.setItem("admin", true)
        } else {
            sessionStorage.setItem("admin", true)
        }
    }
})

