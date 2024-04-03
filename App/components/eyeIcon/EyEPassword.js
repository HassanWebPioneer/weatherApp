import React from 'react' ;
import {useState} from 'react'

export function EyEPassword(){
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [anotherPasswordVisibility, setAnotherPasswordVisibility] = useState(true);
    const [firstIcon , setFirstIcon] =  useState ('eye');
    const [rightIcon, setRightIcon] = useState('eye');
    


    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-with-line');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-with-line') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };
      const AnotherFunctionVisibility = () => {
        if (firstIcon === 'eye') {
          setFirstIcon('eye-with-line');
          setAnotherPasswordVisibility(!anotherPasswordVisibility);
        } else if (firstIcon === 'eye-with-line') {
          setFirstIcon('eye');
          setAnotherPasswordVisibility(!anotherPasswordVisibility);
        }
      };
    
      return {  
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility,
        AnotherFunctionVisibility,
        anotherPasswordVisibility ,
        firstIcon
      };
}


