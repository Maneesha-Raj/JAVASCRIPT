function textC(){
    let x=document.getElementById("text").value;
    document.getElementById("demo").innerHTML=x;
    document.getElementById("id2").innerHTML=typeof x;

    let y=document.getElementById("text2").value;
    document.getElementById("demo2").innerHTML=y;
    document.getElementById("id3").innerHTML=typeof y;

    let f=document.getElementById("fname").value;

    let l=document.getElementById("lname").value;
    
    let flname=f+" "+l;

    document.getElementById("fullname").innerHTML=flname;
}