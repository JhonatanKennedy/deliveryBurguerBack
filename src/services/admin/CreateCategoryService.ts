import { getRepository } from 'typeorm';
import Category from '../../models/Category';

interface Request {
    name: string;
}

class CreateCategoryService {

    public async execute ({ name }: Request): Promise<any> {
        const repositoryCategory = getRepository(Category);

        const newCategory = repositoryCategory.create({
            name
        });

        await repositoryCategory.save(newCategory);

    }

}

export default CreateCategoryService;