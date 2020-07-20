import Address from '../../models/Address';
import { getRepository } from 'typeorm';

class ShowAddressRepository {

    public async execute(user_id: string): Promise<Address[]>{
        const addressRepository = getRepository(Address);

        const adresses = await addressRepository.find({
            where: {user_id}
        });

        return adresses;
    }

}

export default ShowAddressRepository;