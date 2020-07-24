import { getRepository } from 'typeorm';
import Category from '../../models/Category';

class ShowCategoryService {

    public async execute(): Promise<Category[]> {
        const repositoryCategory = getRepository(Category);

        const categories = await repositoryCategory.find();

        return categories;

    }

}

export default ShowCategoryService;