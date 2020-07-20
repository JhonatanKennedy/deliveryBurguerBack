import Address from '../../models/Address';
import { getRepository } from 'typeorm';

interface Request {
    title: string;
    street: string;
    number: number;
    additional: string;
    user_id: string;
}


class CreateAddressService {

    public async execute ({ title, street, number, additional, user_id }: Request) {
        const addressRepository = getRepository(Address);

        const newAddress = addressRepository.create({
            title,
            street,
            number,
            additional,
            user_id
        });

        await addressRepository.save(newAddress);

    }


}

export default CreateAddressService;