function validateForm() {
    var fname = document.getElementById("fname_input").value;
    fname = fname.trim();
    if(fname == ""){
        alert("*Name field is required*");
        document.getElementById("fname_input").value="";
        window.location.href="index.html";
    } 
}