console.log("start")

const listfnction=(locations)=>{
    locations.forEach(element => {
        console.log(element)
    });
}

const mylistArray=["Akash","Kumar","Bansal"]

listfnction(mylistArray)




const asynchFunctionTest= (callback)=>{
    var x=10
    setTimeout(()=>{
        x=x+20
        console.log("Asynchronus wait for 2 second Inside x--",x)
        return callback(x)
    },2000)
    console.log("Asynchronus wait for 2 second Inside x--",x)
    console.log("Asynchronus wait for 2 second Inside x--",x)
    console.log("Asynchronus wait for 2 second Inside x--",x)
    console.log("Asynchronus wait for 2 second Inside x--",x)
    //return callback(x)
}
asynchFunctionTest(res=>{
    console.log(res)
})

console.log("Closing")