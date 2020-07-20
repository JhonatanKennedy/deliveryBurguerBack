import Address from '../../models/Address';
import { getRepository } from 'typeorm';

interface Request {
    id: string;
    user_id: string;
    title: string;
    street: string;
    number: number
    additional: string;
}


class ChangeAddressService {

    public async execute({ id, user_id, title, street, number, additional }: Request) {

        const addressRepository = getRepository(Address);

        await addressRepository.update(
            {id,user_id}, { title, street, number, additional }
        );

    }

}

export default ChangeAddressService;