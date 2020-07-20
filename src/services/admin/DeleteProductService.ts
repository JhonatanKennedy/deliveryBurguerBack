import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request {
    id: string;
}

class DeleteProductService {
    public async execute (id: Request): Promise<void> {
        const productsRepository = getRepository(Product);

        await productsRepository.delete(id);
    }
}

export default DeleteProductService;