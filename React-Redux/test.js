console.log("start");

function check(){
    setTimeout(()=>{
        console.log('second')
    },1000)

}

check()

console.log("third")