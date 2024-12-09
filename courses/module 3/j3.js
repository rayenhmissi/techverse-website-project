function verif1() {
    let t = document.getElementsByTagName("textarea");
    let t1 = t[0].value;
    let an = `#include <stdio.h>
void main() {
    int x, y;
    printf("x=");
    scanf("%d", &x);
    printf("y=");
    scanf("%d", &y);
    printf("%d", x + y);
}`;
    if (an === t1) {
        document.getElementById("p1").style.color = "green";
        document.getElementById("p1").innerHTML = "correct";
    } else {
        document.getElementById("p1").style.color = "red";
        document.getElementById("p1").innerHTML = "incorrect";
    }
}
function verif2() {
    let t = document.getElementsByTagName("textarea");
    let t1 = t[1].value;
    let an = `#include <stdio.h>
void main() {
    int x;
    printf("x=");
    scanf("%d", &x);
    if (x % 2 ==0){
    printf("even");
    }
    else{
    printf("even");
    }
}`;
    if (an === t1) {
        document.getElementById("p2").style.color = "green";
        document.getElementById("p2").innerHTML = "correct";
    } else {
        document.getElementById("p2").style.color = "red";
        document.getElementById("p2").innerHTML = "incorrect";
    }
}
function verif3() {
    let t = document.getElementsByTagName("textarea");
    let t1 = t[2].value;
    let an = `#include <stdio.h>
void main() {
    int x,n,p;
    printf("x=");
    scanf("%d", &x);
    printf("n=");
    scanf("%d", &n);
    p=1;
    for (int i=0;i < n;i++){
    p=p*x;
    }
    printf("%d", p);
}`;
    if (an === t1) {
        document.getElementById("p3").style.color = "green";
        document.getElementById("p3").innerHTML = "correct";
    } else {
        document.getElementById("p3").style.color = "red";
        document.getElementById("p3").innerHTML = "incorrect";
    }
}
function verif5() {
    let t = document.getElementsByTagName("textarea");
    let t1 = t[4].value;
    let an = `#include <stdio.h>
int prime(int x) {
    int i=x/2;
    if(i ==1 || i == x && i != x && x % i ==0){
    return 1;
    }
    else if(x % i==0 && i != x){
    return 0;
    }
    else{
    retrun prime(x,i-1);
    }

}`;
    if (an === t1) {
        document.getElementById("p5").style.color = "green";
        document.getElementById("p5").innerHTML = "correct";
    } else {
        document.getElementById("p5").style.color = "red";
        document.getElementById("p5").innerHTML = "incorrect";
    }
}
function verif4() {
    let t = document.getElementsByTagName("textarea");
    let t1 = t[3].value;
    let an = `#include <stdio.h>
int prime(int x) {
    int i=2;
    int r=1;
    while (x % i !=0 && i < x && r ==1){
    if (x % i==0){
    r=0;
    }
    i++;
    }
    return 1;
}`;
    if (an === t1) {
        document.getElementById("p4").style.color = "green";
        document.getElementById("p4").innerHTML = "correct";
    } else {
        document.getElementById("p4").style.color = "red";
        document.getElementById("p4").innerHTML = "incorrect";
    }
}
function verify() {
    verif1();
    verif2();
    verif3();
    verif4();
    verif5();
}
