function drawMesg(x) {
    for (s = 1; s <= 200; s++) {
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
    ans=1;
    for(i=1;i<=q;i++){
        ans=ans*p;
        p--;
    }
    return ans;
}
