import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Product from '../../models/Product'; 

import uploadConfig from '../../config/upolad';

interface Request {
    id: string;
}

class DeleteProductService {
    public async execute ({ id }: Request): Promise<void> {
        const productsRepository = getRepository(Product);
        const product = await productsRepository.findOne(id);

        if (product?.photo){
            const productPhotoFilePath = path.join(uploadConfig.directory,product.photo);
            const productPhotoFileExists = await fs.promises.stat(productPhotoFilePath);
            if(productPhotoFileExists) {
                await fs.promises.unlink(productPhotoFilePath);
            }
        }

        await productsRepository.delete(id);
    }
}

export default DeleteProductService;