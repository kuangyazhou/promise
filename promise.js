// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// })
// promise.then(() => {
//     console.log(3);
// });
// console.log(4);

// const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('success');
//         }, 1000);
//     })
//     console.log(promise1);
// promise1.then(() => {
//     console.log(promise1);
//     throw new Error('Error');
// }).catch(() => {
//     console.log(promise1);
// })


//resolve或reject只有一次执行有效。多次调用无作用,状态一旦修改不可逆
// const promise2 = new Promise((resolve, reject) => {
//     resolve('success');
//     reject('error');
//     resolve('success2');
// });
// promise2.then((res) => {
//     console.log('then', res);
// }).catch((err) => {
//     console.log('catch', err);
// })

// Promise.resolve(1)
//     .then((res) => {
//         console.log(res);
//         return 2;
//     })
//     .catch((err) => {
//         return 3
//     })
//     .then((res) => {
//         console.log(res);
//     })


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('once');
//         resolve('success');
//     }, 1000);
// })

// const start = Date.now();
// promise3.then((res) => {
//     console.log(res, Date.now() - start);
// })

// promise3.then((res) => {
//     console.log(res, Date.now() - start);
// })


// Promise.resolve()
//     .then(() => {
//         return new Error('error');
//     })
//     .then((res) => {
//         console.log('then', res);
//     })
//     .catch((err) => {
//         console.log('catch', err);
//     })


process.nextTick(() => {
    console.log('nextTick');
})
Promise.resolve().then(() => { console.log('then'); })

setImmediate(() => { console.log('setImmediate') })
console.log('end');

//process.nextTick和promise.then都属于microtasks，而setImmediate属于macrotasks，在事件循环的check阶段执行。事件循环的每个阶段(macrotasks)之间都会执行microtasks，事件循环的开始会先执行一次microtasks。

//nextTick 在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM

//nextTick的执行优先级要高于setImmediate();