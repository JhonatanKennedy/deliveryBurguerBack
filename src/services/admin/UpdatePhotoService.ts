import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Product from '../../models/Product'; 

import uploadConfig from '../../config/upolad';

interface Request {
    product_id:string;
    photoFilename: string;
}

class UpdatePhotoService {

    public async execute({ product_id, photoFilename }: Request): Promise<Product> {
        const productRepository = getRepository(Product);

        const product = await productRepository.findOne(product_id);
        
        if(!product) {
            throw new Error('Produto nao existe!');
        }
        if (product.photo){
            const productPhotoFilePath = path.join(uploadConfig.directory,product.photo);
            const productPhotoFileExists = await fs.promises.stat(productPhotoFilePath);

            if(productPhotoFileExists) {
                await fs.promises.unlink(productPhotoFilePath);
            }
        }

        product.photo = photoFilename;

        await productRepository.save(product);
        
        return product;
    }

}

export default UpdatePhotoService;