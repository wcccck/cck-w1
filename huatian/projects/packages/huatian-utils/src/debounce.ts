type FN = (...args :any[]) => any
export function debounce(fn :FN,limit:number = 300){
  let I:any = 0
  return (...args :any[])=>{
    clearTimeout(I)
    I = setTimeout(()=>{
      fn(...args)
    },limit)
    
  }
}

const fn = debounce((msg:String)=>{
  console.log(msg);
})

for(let i =0;i<100001;i++){
  fn(i)
}
// debounce(()=>{},300)