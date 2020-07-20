import UserRepository from '../../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';


interface Request {
    id: string;
}

class DeleteUserService {

    public async execute ({ id }: Request) {

        const userRepository = getCustomRepository(UserRepository);

        await userRepository.delete({id});

    }

}

export default DeleteUserService;