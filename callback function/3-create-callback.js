//1.simple function call
function dohomework(subject){
    console.log(`start my ${subject} homework`)
}

dohomework('mathemathics')


//2. function  callback with inner function
function dohomework(subject,cb){
    console.log(`start my ${subject} homework`)
    cb();
}

//3.function  callback with outer function
dohomework('mathemathics', function(){
    console.log('finished my homework')
})

function alerthomework(){
    console.log('finished my homework')
}

dohomework('mathemathics', alerthomework)