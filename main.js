//////////////////////// Part 1 ////////////////////////

let counter = 0;
function stackOverflow(){
    counter++
    return stackOverflow()
};

try{
    stackOverflow()
}catch{
    console.log(`${counter} call completed before stack overflow.`)
}



