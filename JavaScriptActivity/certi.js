function readval(){
    let course=document.getElementById("id1").value;
    let cid=document.getElementById("id2").value;
    let cname=document.getElementById("id3").value;
    let g=document.getElementById("id4").value;
    let d=document.getElementById("id5").value;
    console.log("Course :",course);
    console.log("Certificate Id :",cid);
    console.log("Candidate Name :",cname);
    console.log("Grade :",g);
    console.log("Issue Date :",d);

    //using browser storage(localStorage) to store data instead of storing data in database 

    localStorage.setItem("id",cid);  //setItem() : function ; 'id' : name to identify storage location in browser local storage; 'cid' : corresponding field name holding corresponding values
    localStorage.setItem("name",cname);
    localStorage.setItem("course",course);
    localStorage.setItem("grade",g);
    localStorage.setItem("date",d);

    let x=localStorage.getItem("id"); // getItem() : function to print the data stored in localStorage
    console.log(x);
    let y=localStorage.getItem("name"); //[id,name,course,grade,date : storage location names]
    console.log(y);
    let z=localStorage.getItem("course");
    console.log(z);
    let u=localStorage.getItem("grade");
    console.log(u);
    let v=localStorage.getItem("date");
    console.log(v);

}


function kbacert(){
    let key=document.getElementById("text1").value;

}