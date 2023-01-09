const files = import.meta.glob('./**/*.tsx')
const keys = Object.keys(files)
// console.log(keys);
keys.map((item)=>{
  // console.log(files[item]);
})


