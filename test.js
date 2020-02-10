var outer =function(x){
    x();
    console.log('outer function')
    return 2;
}

var foo = function(){
    console.log('foo')
}

var result=outer(foo);
console.log(result)