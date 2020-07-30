import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request{
    id: string;
    name: string;
    price: number;
    description:string;
    photo: string;
}

class ChangeProductService {

    public async execute({ id, name, price, description }: Request): Promise<void> {
        const productsRepository = getRepository(Product)
        
        await productsRepository.update(
            { id }, { name, price, description }
        );
    }
}   

export default ChangeProductService;