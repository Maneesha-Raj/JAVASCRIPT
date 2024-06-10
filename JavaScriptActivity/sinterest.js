function simple(){
    let p=document.getElementById("text1").value;
    let r=document.getElementById("text2").value;
    let t=document.getElementById("text3").value;
    p=Number.parseInt(p);
    r=Number.parseInt(r);
    t=Number.parseInt(t);
    let si=(p*r*t)/100;
    document.getElementById("id1").innerHTML=si;

}