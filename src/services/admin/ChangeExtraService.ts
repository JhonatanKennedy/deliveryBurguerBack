import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';

interface Request {
    id:string;
    name:string;
    price: number;

}

class ChangeExtraService {
    public async execute({ id, name, price }: Request) {
        const extraRepository = getRepository(Extra);
        await extraRepository.update(
            {id},{name,price}
        );
    }
}

export default ChangeExtraService;