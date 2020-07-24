import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';

interface Request {
    category_id: string
}

class ShowExtraService {
    public async execute({category_id}: Request): Promise<Extra[]>{
        const extraRepository = getRepository(Extra);
        const extras = await extraRepository.find({
            where: {category_id}
        });

        return extras;
    }
}

export default ShowExtraService;