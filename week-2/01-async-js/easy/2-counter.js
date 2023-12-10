let count = 1

async function counter(duration){

while(true){
    await new Promise((resolve)=>{
        setTimeout(() => {
                resolve()
            console.clear();
            console.log(count++);
        }, duration);
        })
}
}
counter(2000)
