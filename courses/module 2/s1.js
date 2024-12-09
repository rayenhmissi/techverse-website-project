function verify_q1(){
    q1=document.getElementsByName("q1");
    if (q1[1].checked == true){
        document.getElementById("p1").innerHTML="correct";
        document.getElementById("p1").style.color="green";
    }
    if (q1[1].checked == false){
        document.getElementById("p1").innerHTML="incorrect";
        document.getElementById("p1").style.color="red";
    }
}
function verify_q2(){
    q2=document.getElementsByName("q2");
    if (q2[0].checked == true){
        document.getElementById("p2").innerHTML="correct";
        document.getElementById("p2").style.color="green";
    }
    if (q2[0].checked == false){
        document.getElementById("p2").innerHTML="incorrect";
        document.getElementById("p2").style.color="red";
    }
}
function verify_q3(){
    s=document.getElementById("s").value;
    s1=document.getElementById("s1").value;
    s2=document.getElementById("s2").value;
    p3="";
    if (s != "bit"){
        p3+="the first answer is false";
    }
    if (s == "bit"){
        p3+="the first answer is true";
    }
    if (s1 != "failed"){
        p3+=" and the second answer is false";
    }
    if (s1  == "failed"){
        p3+=" and the second answer is true";
    }
    if (s1 != "successful"){
        p3+="a nd the third answer is false";
    }
    if (s2  == "successful"){
        p3+=" and the third answer is true";
    }
    document.getElementById("p3").innerHTML=p3;
}
function verify_q4(){
    q4=document.getElementsByName("q4");
    if (q4[0].checked == true){
        document.getElementById("p4").innerHTML="correct";
        document.getElementById("p4").style.color="green";
    }
    if (q4[0].checked == false){
        document.getElementById("p4").innerHTML="incorrect";
        document.getElementById("p4").style.color="red";
    }
}
function verify_q5(){
    q5=document.getElementById("q5").checked;
    q51=document.getElementById("q51").checked;
    q52=document.getElementById("q52").checked;
    if (q51 == true && q52 == true && q5 == false){
        document.getElementById("p5").innerHTML="correct";
        document.getElementById("p5").style.color="green";
    }
    else{
        document.getElementById("p5").innerHTML="incorrect";
        document.getElementById("p5").style.color="red";
    }
}
function verify_q6(){
    q6=document.getElementsByName("q6");
    if (q6[0].checked == true){
        document.getElementById("p6").innerHTML="correct";
        document.getElementById("p6").style.color="green";
    }
    if (q6[0].checked == false){
        document.getElementById("p6").innerHTML="incorrect";
        document.getElementById("p6").style.color="red";
    }
}
function verify_q7(){
    q7=document.getElementsByName("q7");
    if (q7[0].checked == true){
        document.getElementById("p7").innerHTML="correct";
        document.getElementById("p7").style.color="green";
    }
    if (q7[0].checked == false){
        document.getElementById("p7").innerHTML="incorrect";
        document.getElementById("p7").style.color="red";
    }
}
function verify_q8(){
    q8=document.getElementsByName("q8");
    if (q8[1].checked == true){
        document.getElementById("p8").innerHTML="correct";
        document.getElementById("p8").style.color="green";
    }
    if (q8[1].checked == false){
        document.getElementById("p8").innerHTML="incorrect";
        document.getElementById("p8").style.color="red";
    }
}
function verify_q9(){
    q9=document.getElementsByName("q9");
    if (q9[1].checked == true){
        document.getElementById("p9").innerHTML="correct";
        document.getElementById("p9").style.color="green";
    }
    if (q9[1].checked == false){
        document.getElementById("p9").innerHTML="incorrect";
        document.getElementById("p9").style.color="red";
    }
}
function verify_q10(){
    q10=document.getElementsByName("q10");
    if (q10[1].checked == true){
        document.getElementById("p10").innerHTML="correct";
        document.getElementById("p10").style.color="green";
    }
    if (q10[1].checked == false){
        document.getElementById("p10").innerHTML="incorrect";
        document.getElementById("p10").style.color="red";
    }
}
function verify1(){
    verify_q1();
    verify_q2();
    verify_q3();
    verify_q4();
    verify_q5();
    verify_q6();
    verify_q7();
    verify_q8();
    verify_q9();
    verify_q10();
}