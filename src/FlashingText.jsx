import React,{useState,useEffect} from 'react';

export function BlinkingText() {
  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    const intverlid=setInterval(()=>{
      setVisible((v)=>!v)
    },1000)
return ()=>clearInterval(intverlid)
  },[])
  return (
    <div className='App'>
 {visible && <p>Dial this number 99000056454</p> }
    </div>
  );
}


