function swapn(){
    let a=document.getElementById("text1").value;
    let b=document.getElementById("text2").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    a=a+b;
    b=a-b;
    a=a-b;
    document.getElementById("id1").innerHTML=a;
    document.getElementById("id2").innerHTML=b;

    
}