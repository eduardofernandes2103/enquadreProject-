import { ReactNode } from 'react';
import { Card } from './styles';

interface CardValues {
    id: number;
    title: string;
    image: string;
    children: ReactNode;
    description: string;
    price: number;
    onClick: () => void;

}

const CardOfProduct = ({ id, title, image, children, description, price, onClick }:
    CardValues) => {
    return (
        <Card>
            <div key={id}>
                <figure><img src={image} alt="" width="100" height="100" ></img></figure>
                <p>{title}</p>
                <p>{description}</p>
                <hr />
                <p>{price}</p>
                <button onClick={onClick}>{children}</button>
                
            </div>
        </Card>
    )
}

export default CardOfProduct;
