import { getRepository } from 'typeorm';
import Extra from '../../models/Extra';


class ShowExtraService {

    public async execute(): Promise<Extra[]>{
        const extraRepository = getRepository(Extra); 
        return await extraRepository.find();
    }

}
export default ShowExtraService;