import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request {
    category_id: string;
}

class ShowProductService {

    public async execute({category_id}: Request): Promise<Product[]>{
        const productsRepository = getRepository(Product);
        
        return await productsRepository.find({
            where: {category_id}
        });
    }
}   

export default ShowProductService;