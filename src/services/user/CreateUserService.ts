import { getCustomRepository, getRepository } from 'typeorm';
import UserRepository from '../../repositories/UserRepository';
import Address from '../../models/Address';
import { hash } from 'bcryptjs';

interface Request {
    name: string;
    email: string;
    password: string;
    phone: string;
    title: string;
    street: string;
    number: number;
    additional: string;

}


class CreateUserService {

    public async execute({ name, email, password, phone, title, street, number, additional }: Request): Promise <any> {
        const usersRepository = getCustomRepository(UserRepository);
        const addressRepository = getRepository(Address);

        const checkUsersEmail = await usersRepository.findOne({
            where: { email },
        });

        if(checkUsersEmail){
            throw new Error('Email já ultilizado.');
        }

        const hashedPassword = await hash(password,8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        await usersRepository.save(user);

        delete user.password;

        const address = addressRepository.create({
            title,
            street,
            number,
            additional,
            user_id: user.id
        });

        await addressRepository.save(address);

        return user;
    }


}

export default CreateUserService;