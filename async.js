function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, time);
    })
}


let start = async function(params) {
    console.log('start');
    await sleep(3000);
    // let result=await sleep(3000); 直接获得返回结果
    console.log('end');
}
start();