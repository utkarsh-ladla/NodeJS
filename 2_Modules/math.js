// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

exports.add = (a,b) => a+b; //anonymous functi0ns
exports.sun = (a,b) => a-b;

// module.exports = add;
// module.exports = sub;
// IN this scenerio this is wrong because add it override - lost during exports 
// we use object for this 

// module.exports = {
//     addFn : add,
//     subFn : sub
// };