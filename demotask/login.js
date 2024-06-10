function submit(){
    let a=document.getElementById("id1").value;
    let b= document.getElementById("id2").value;

    localStorage.setItem("user", a);
    localStorage.setItem("pwd", b);
    
}