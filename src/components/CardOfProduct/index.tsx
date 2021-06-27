import { ReactNode } from 'react';
import { Card } from './styles';

interface CardValues {
    id?: number;
    title?: string;
    image?: string;
    children?: ReactNode;
    price?: number;
    click?: () => void;

}

const CardOfProduct = ({ id, title, image, children, price, click }:
    CardValues) => {
    return (
        <Card key={id}>
        
                <figure><img src={image} alt="" width="150" height="150" ></img></figure>
                <p>{title}</p>
                <p>R$ {price}</p>
                <button onClick={click}>{children}</button>
                
            
        </Card>
    )
}

export default CardOfProduct;
