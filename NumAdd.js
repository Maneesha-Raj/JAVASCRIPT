function add(){
    let a=document.getElementById("text1").value; //value entered is taken as string
    let b=document.getElementById("text2").value;  
    a=Number.parseInt(a); //converting string to number
    b=Number.parseInt(b);
    let c=a+b;
    document.getElementById("sum").innerHTML=c;
    document.getElementById("id1").innerHTML=typeof a;
    document.getElementById("id2").innerHTML=typeof b;

}

function mul(){
    let c=document.getElementById("text1").value;
    let d=document.getElementById("text2").value;
    c=Number.parseInt(c);
    d=Number.parseInt(d);
    let res=c*d;
    document.getElementById("prod").innerHTML=res;
}

function div(){
    let p=document.getElementById("text1").value;
    let q=document.getElementById("text2").value;
    p=Number.parseInt(p);
    q=Number.parseInt(q);
    let result=p/q;
    document.getElementById("quotient").innerHTML=result;
}