function student(){
    let x= document.getElementById("text1").value;
    if(x==detail.rno){
        let r= detail.rno;
        let n= detail.name;
        let c= detail.clas;
        let ad= detail.address;

        document.getElementById("id1").innerHTML=r;
        document.getElementById("id2").innerHTML=n;
        document.getElementById("id3").innerHTML=c;
        document.getElementById("id4").innerHTML=ad;
    }else{
        document.getElementById("id5").innerHTML="Invalid Roll no.";
    }

}