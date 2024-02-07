import icons8google from './images/icons8google.png';
import apple from './images/apple.png';
import eyeof from './images/eyeof.png';
import eyeopenn from './images/eyeopenn.png';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [post,setPost] = useState({
        login: '',
        password: ''
  });

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
    
    
  }
  
  
  function handleSubmit (event) {
          event.preventDefault()
          console.log(post)
          axios.post(`https://jsonplaceholder.typicode.com/users`, {post})
          .then(res => console.log(res))
          .catch(err => console.log(err))
  }
  const [isPasswordVisible,setIsPasswordVisible] = useState(true);
  return (
    <form onSubmit={handleSubmit}>
    <div className="w-[100%] h-[920px] flex  bg-[#111827] ">
      <div className="h-[614.58px] w-[464px] mt-[70px] m-auto px-[28px] py-[32px]  rounded-[10px] m-auto bg-[#FFFFFF] ">
        <div className='w-[193px] h-[46px] '>
          <div className='h-[29px]  text-[24px] text-[#111827]  font-bold font-[lato] leading-[28.8px]'>Sign in</div>
          <div className='w-[194px] h-[17px]'>
          <div className=' text-[14px] font-[lato]  h-[17px] font-normal leading-[16.8px]  text-[#111827]'>Don’t have an account? 
            <span className='underline text-[14px] font-[poppins] font-normal leading-[21px] text-[#7C47BD]'> Sign up
            </span>
         </div>
      </div>
   </div>
       <div className='grid gap-y-[67.5px] mt-[55px] w-[400px] h-[452.58px]'>
        <div className='grid gap-y-[27px] w-[399.12px] h-[160.57px]'>
        
          <div className='grid gap-y-[20.25px] w-[399.12px] h-[160.57px]'>
          <div className='grid gap-y-[3.38px] w-[399.12px] h-[70.16px'>
            
            <div className='w-[399.12px] h-[22.7px]'>
              <span className='text-[#1F2937] w-[84px] h-[17px] text-[14px] font-normal font-[lato] leading-[16.8px]'>Email address</span>
            </div> 
          <input  type='text' name='login' onChange={handleInput} className='w-[399.12px] h-[44px] text-[16px] border-[1px] border-inherit-[#626373] font-normal p-[10px] rounded-[8px]'></input>
        </div>
        <div className='grid gap-y-[3.38px] w-[399.12px] h-[70.16px'>
          <div>
            <span className='text-[#50535E] absolute w-[84px] h-[17px] text-[14px] font-normal font-[lato] leading-[16.8px]'>Password</span>
            <div onClick={(e) => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? <img src={eyeof}  className='relative w-[20px] h-[20px] cursor-pointer left-[370px] top-[38px]' /> : 
              <img src={eyeopenn}  className='relative w-[
                20px] h-[20px] cursor-pointer left-[370px] top-[38px]' />}
            
            </div>
           
            </div>
          <input type={isPasswordVisible ? `password` : `text`}   name='password'  onChange={handleInput} className='w-[399.12px] h-[44px]  border-[1px] border-inherit-[#626373] font-[lato] p-[10px] rounded-[8px]'></input>
        </div>
        
        </div>
        
        </div>
        
        <div className='grid gap-y-[27px] w-[400px] h-[224.5px]'>
            <button className='bg-[#7C47BD]  w-[400px] h-[44px]  opacity-60  rounded-[8px]'>
                  <div className='grid gap-y-[27px] text-[16px] font-[lato] font-medium text-[#FFFFFF] leading-[19.2px]'>  Sign in</div>
            </button> 
             
        <div className='text-center flex items-center justify-between w-[399.12px]'> 
                  <div className='w-[167.92px] h-[1.69px] bg-[#626373] opacity-[30%]'></div> 
                                  <span className='text-[#111827] font-normal w-[24.47px] h-[25px] text-[16.88px] leading-[25.31px]'>OR</span>
                  <div className='w-[167.92px] h-[1.69px] bg-[#626373] opacity-[30%]'></div>
        </div> 
        <div className='w-[399.12px] h-[101.5px] '>
        <button className='flex justify-center w-[399.12px] h-[44px]  border-[1px] border-inherit-[#626373] rounded-[8px]'>
              <div className='text-[16px] justify-around flex pt-[9px] leading-[19.2px] w-[189.5px] h-[22px] font-[lato]'>
                           <img src={icons8google} className='w-[20px] h-[20px]'/> 
              <div className='text-[16px]  leading-[19.2px] w-[154px] h-[19px] font-normal  font-[lato]'>Continue with Google</div>
            </div> 
        </button>
          <div className='text-[16px]  leading-[19.2px] w-[154px] h-[19px] font-normal text-[#111827] font-[lato]'>
        <button className='flex mt-[12px] justify-center  w-[399.12px] h-[44px] m-auto border-[1px] border-inherit-[#626373] rounded-[8px]'>
        <div className='text-[16px] flex justify-center  pt-[9px] leading-[19.2px] w-[76.5px] h-[22px] font-[lato]'>
          <img  src={apple} className='w-[20px] h-[20px] '  />
           <div className='text-[16px] w-[41x] h-[19px] leading-[19.2px] text-[16px]'>Apple</div>
           </div>
        </button>
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>
    </form> 
  );
}

export default App;