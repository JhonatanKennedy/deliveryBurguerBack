import { getRepository } from 'typeorm';
import Category from '../../models/Category';

interface Request {
    id: string;
    name:string;
}

class ChangeCategoryService{

    public async execute({ id, name }: Request): Promise<any>{
        const categoryRepository = getRepository(Category);

        await categoryRepository.update(
            {id}, {name}
        );    
    }

}

export default ChangeCategoryService;