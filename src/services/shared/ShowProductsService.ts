import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request {
    name: string;
}

class ShowProductService {

    public async execute({name}: Request): Promise<Product[]>{
        const productsRepository = getRepository(Product);
        
        if(name){
            return await productsRepository.find({
                where: {name}
            });
        }else{
            return await productsRepository.find();
        }
    }
}   

export default ShowProductService;