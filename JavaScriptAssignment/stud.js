function student(){
    

    let rno=document.getElementById("id1").value;
    rno=parseInt(rno);

    document.getElementById("text1").innerHTML=studlist[rno-1];

    
}