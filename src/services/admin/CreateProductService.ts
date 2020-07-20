import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request{
    name: string;
    price: number;
    description:string;
    photo: string;
}

class CreateProductService {

    public async execute({ name, price, description, photo }: Request): Promise<Product>{
        const productsRepository = getRepository(Product);

        const product = productsRepository.create({
            name,
            price,
            description,
            photo
        });

        await productsRepository.save(product);
        return product;
    }
}   

export default CreateProductService;