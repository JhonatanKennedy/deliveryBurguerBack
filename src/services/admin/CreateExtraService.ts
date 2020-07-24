import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';

interface Request {
    name: string;
    price: number;
    category_id:string;
}

class CreateExtraService  {

    public async execute({ name, price, category_id}: Request): Promise<Extra> {
        const extraRepository  = getRepository(Extra);

        const extra = extraRepository.create({
            name,
            price,
            category_id
        });

        await extraRepository.save(extra);

        return extra;
    }

}

export default CreateExtraService;