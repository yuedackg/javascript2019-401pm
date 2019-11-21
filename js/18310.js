function drawMesg(x) {
    for (D = 1; D < 200; D++) {
        document.write("hello<br>");
    }
}
function foo(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * foo(x - 1);
    }
}
function bar(p,q){
    answer=1;
    for(i=1;i<=q;i++){
        answer=answer*p;
        p--;

    }
    return answer;
}