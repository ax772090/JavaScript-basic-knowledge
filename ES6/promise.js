/* 上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。 */
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}
timeout(3000).then((value) => {
  console.log('promiseTest:', value)
})

/* promise新建后立即执行，所以首先输出promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。 */
let promise = new Promise((resolve, reject) => {
  console.log('promise')
  resolve()
})
promise.then(() => {
  console.log('then-resolved')
})
console.log('同步任务先执行Hi')
// promise
// 同步任务先执行Hi
// then-resolved

console.log('****************************************************')
/* p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作 */
/* 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject(new Error('fail'))
  }, 3000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(p1)
  }, 1000)
})
p2.then((result) => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

/* 采用链式的then，可以指定一组按照次序调用的回调函数。第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB */
getJSON('"/post/1.json"').then((post) => {
  return getJSON(post.commentURL)
}).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
)

/* 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。因此，建议总是使用catch方法，而不使用then方法的第二个参数。*/
// bad
promise.then((data) => {
  // success
}, (error) => {
  // error
})
// good
promise.then((data) => {
  // success
}).catch((error) => {
  // error
})

/* Promise.try()方法可以使同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API */
Promise.try(()=>{
  
}).then(()=>{

}).catch(()=>{

})
