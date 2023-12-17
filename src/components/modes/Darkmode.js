import React, {useState, useEffect} from 'react'


export default function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const body = document.body;
    const bgMode = document.getElementById('header-bg') 


    if(isDarkMode) {
        body.classList.add('dark-mode')
        bgMode.classList.add('dark-bg')
        
     
    }else {
        body.classList.remove('dark-mode')
        bgMode.classList.remove('dark-bg')
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  };

  return (
    <div className='switch-line'>
        <h5 className='gray'>Dark Mode</h5>
       <div className='switch'>
       <input type='checkbox' id='switch'  onClick={toggleDarkMode} />
        <label for='switch' > <span className='invisible'>switch</span></label>
       </div>
    </div>
  );

}