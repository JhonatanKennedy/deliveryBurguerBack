import Address from '../../models/Address';
import { getRepository } from 'typeorm';

interface Request {
    id: string;
    user_id: string;
}

class DeleteAddressService {

    public async execute({ id, user_id }: Request){
        const addressRepository = getRepository(Address);

        await addressRepository.delete({id,user_id});
    }


}

export default DeleteAddressService;