import React,{useState} from 'react'
// import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from 'react-icons-kit';
function App() {
  const [InputType, setInputType] = useState('password');
  const [IconApp, setIconApp] = useState(eyeOff);
  const ClickHandeler=()=>{
if (InputType==='password') {
  setIconApp(eyeOff)
  setInputType('text')
} else {
  setIconApp(eye)
  setInputType('password')
}
  }
  return (
    <div className='flex items-center justify-center h-screen w-full bg-rose-400'>
<div className='pl-10'>
  <input type={InputType} className='w-80 pl-4 py-4 text-xl font-semibold rounded-lg focus:outline-none'/>
  <Icon icon={IconApp} onClick={ClickHandeler} size={33} className='inline-flex   bottom-[2px] relative right-11  cursor-pointer'/>
  {/* <Icon /> */}
</div>
    </div>
  )
}

export default App