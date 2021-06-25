import { ReactNode } from 'react';
import MyButton from './styles'

interface ButtonProps {
    children: ReactNode;
    setColor: string;
    setFontColor: string;
    setSize: string;
    type?: string;
    click?: () => void;
  }
  

const Button = ({children, setColor, setFontColor, setSize, type, click }: ButtonProps) => {

    return(
      <MyButton 
          setColor={setColor}
          setFontColor={setFontColor}
          onClick={click}
          setSize={setSize}
          // type={type}
        >{children}
      </MyButton>
    )
}


export default Button
