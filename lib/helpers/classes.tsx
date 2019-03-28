// className处理
const classes = (...args: (undefined|string)[]) =>{
  return args.filter(Boolean).join(' ');
} 

export default classes;