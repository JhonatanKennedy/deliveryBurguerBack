import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';

interface Request {
    name: string;
    price: number;
}

class CreateExtraService  {

    public async execute({ name, price }: Request): Promise<Extra> {
        const extraRepository  = getRepository(Extra);

        const extra = extraRepository.create({
            name,
            price
        });

        await extraRepository.save(extra);

        return extra;
    }

}

export default CreateExtraService;