import { getRepository } from 'typeorm';
import Product from '../../models/Product';

class ShowProductService {

    public async execute(): Promise<Product[]>{
        const productsRepository = getRepository(Product);
        
        return await productsRepository.find();
    }
}   

export default ShowProductService;