const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3秒経ちました")
        resolve();
    },3000)
})

promise.then(()=>{
    setTimeout(()=>{
        console.log("更に2秒経ちました");
    },2000)
})