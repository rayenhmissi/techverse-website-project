function verify_q1(){
    q1=document.getElementById("r2").checked;
    ;
    if (q1==true){
    document.getElementById("p1").innerHTML="correct";
    }
    else if (q1==false){
    document.getElementById("p1").innerHTML="incorrect";
    }
    }
    function verify_q2(){
    q2=document.getElementById("r4").checked;
    if (q2==true){
    document.getElementById("p2").innerHTML="correct";
    }
    else if (q2==false){
    document.getElementById("p2").innerHTML="incorrect";
    }
    }
    function verify_q3(){
    rl=Array();
    r7=document.getElementById("r7").checked;
    r8=document.getElementById("r8").checked;
    r9=document.getElementById("r9").checked;
    r10=document.getElementById("r10").checked;
    if (r7){
    rl.push("RAM");
    }
    if (r8){
    rl.push("cache");
    }
    if (r9){
    rl.push("hard disk");
    }
    if (r10){
    rl.push("register");
    }
    rl1=["cache","register"];
    l=rl.length;
    l1=rl1.length;
    if (l != l1){
    document.getElementById("p3").innerHTML="incorrect";
    }
    else if (l == l1){
    for (i=0;i < 2;i++){
    if (rl1[i] == rl[i]){
    r=true;
    }
    else if (rl1[i] != rl[i]){
    r=false;
    }
    }
    if (r==true){
    document.getElementById("p3").innerHTML="correct";
    }
    else if (r==false){
    document.getElementById("p3").innerHTML="incorrect";
    }
    }
    }
    function verify_q4(){
    r11=document.getElementById("r11").checked;
    r14=document.getElementById("r14").checked;
    r16=document.getElementById("r16").checked;
    if (r11 == true){
    document.getElementById("ch1").style.color="green";
    document.getElementById("ch1").innerHTML="correct";
    }
    else if (r11 == false){
    document.getElementById("ch1").style.color="red";
    document.getElementById("ch1").innerHTML="incorrect";
    }
    if (r14 == true){
    document.getElementById("ch2").style.color="green";
    document.getElementById("ch2").innerHTML="correct";
    }
    else if (r14 == false){
    document.getElementById("ch2").style.color="red";
    document.getElementById("ch2").innerHTML="incorrect";
    }
    if (r16 == true){
    document.getElementById("ch3").style.color="green";
    document.getElementById("ch3").innerHTML="correct";
    }
    else if (r16 == false){
    document.getElementById("ch3").style.color="red";
    document.getElementById("ch3").innerHTML="incorrect";
    }
    }
    function verify_q5(){
    r17=document.getElementById("r17").value;
    r18=document.getElementById("r18").value;
    r19=document.getElementById("r19").value;
    r20=document.getElementById("r20").value;
    if (r17 != 256000){
    document.getElementById("p5").innerHTML="incorrect";
    }
    if (r17 == 256000){
    document.getElementById("p5").innerHTML="correct";
    }
    if (r18 != 3){
    document.getElementById("p6").innerHTML="incorrect";
    }
    if (r18 == 3){
    document.getElementById("p6").innerHTML="correct";
    }
    if (r20 != 200){
    document.getElementById("p8").innerHTML="incorrect";
    }
    if (r20== 200){
    document.getElementById("p8").innerHTML="correct";
    }
    if (r19 != 10485760){
    document.getElementById("p7").innerHTML="incorrect";
    }
    if (r19== 10485760){
    document.getElementById("p7").innerHTML="correct";
    }
    }
    function verify_q6(){
    r22=document.getElementById("r22").checked;
    if (r22 == false){
    document.getElementById("p9").innerHTML="incorrect";
    }
    if (r22 == true){
    document.getElementById("p9").innerHTML="correct";
    }
    }
    function verify_q7(){
    r26=document.getElementById("r26").checked;
    if (r26 == false){
    document.getElementById("p10").innerHTML="incorrect";
    }
    if (r26 == true){
    document.getElementById("p10").innerHTML="correct";
    }
    }
    function verify_q8(){
    r29=document.getElementById("r29").checked;
    if (r29 == false){
    document.getElementById("p11").innerHTML="incorrect";
    }
    if (r29 == true){
    document.getElementById("p11").innerHTML="correct";
    }
    }
    function verify_q9(){
    r30=document.getElementById("r30").checked;
    if (r30== false){
    document.getElementById("p12").innerHTML="incorrect";
    }
    if (r30 == true){
    document.getElementById("p12").innerHTML="correct";
    }
    }
    function verify_q10(){
    r33=document.getElementById("r33").value;
    if (r33 != "hz"){
    document.getElementById("p13").innerHTML="incorrect";
    }
    if (r33== "hz"){
    document.getElementById("p13").innerHTML="correct";
    }
    }
function verify11() {
    if (verify_q1() == false ||
    verify_q2() == false ||
    verify_q3() == false ||
    verify_q4() == false ||
    verify_q5() == false ||
    verify_q6() == false ||
    verify_q7() == false ||
    verify_q8() == false ||
    verify_q9() == false ||
    verify_q10() == false
    ) {
    return false;
    } else if (
    verify_q1() == true &&
    verify_q2() == true &&
    verify_q3() == true &&
    verify_q4() == true &&
    verify_q5() == true &&
    verify_q6() == true &&
    verify_q7() == true &&
    verify_q8() == true &&
    verify_q9() == true &&
    verify_q10() == true
    ) {
    return true;
    }
    }
function verify() {
    const f = document.getElementsByTagName("form")[0];
    const b = document.createElement("input");
    b.value = "computer choice guide";
    b.setAttribute("type", "submit");
    b.setAttribute("class", "b");
    if (verify11() == true) {
    f.setAttribute("action", "ch.html");
    f.appendChild(b);
    } else {
    return false;
    }
}