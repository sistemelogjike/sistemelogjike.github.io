function countones(a){
    var c=0;
    for(var i=0;i<a.length;i++){
    if(a.charAt(i)==='1'){
    c++;
    }
    }
    return c;
    }
    
    function tobin(nr){
    var str="";
    if(nr=="0"){
    return "0";
    }
    else{
    while(nr!=0){
    str+=(nr%2).toString();
    nr=parseInt(nr/2);
    }
    var toarr = str.split("");
    var reverseArray = toarr.reverse();
    var revstr = reverseArray.join("");	
    return revstr;
    }
    }
    
    function todec(nr){
    var str="";
    var s=0;
    for(var i=0;i<nr.length;i++){
    s+=parseInt(nr.charAt(i))*Math.pow(2,nr.length-i-1);
    }
    return s;
    }