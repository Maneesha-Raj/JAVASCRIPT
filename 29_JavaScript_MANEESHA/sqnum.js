function square(){
    let a=document.getElementById("text1").value;
    a=Number.parseInt(a);
    let sqr=a*a;
    document.getElementById("id1").innerHTML=sqr;
}

function cube(){
    let b=document.getElementById("text1").value;
    b=Number.parseInt(b);
    let cube=b*b*b;
    document.getElementById("id2").innerHTML=cube;
}