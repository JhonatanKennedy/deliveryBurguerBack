import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';

interface Request {
    id: string;
}

class DeleteExtraService {

    public async execute(id: Request): Promise<void> {
        const extraRepository = getRepository(Extra);

        await extraRepository.delete(id);
    }

}

export default DeleteExtraService;