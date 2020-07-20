import UserRepository from '../../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

class ShowUserService {
    public async execute(): Promise<any>{
        const userRepository = getCustomRepository(UserRepository);

        const users = await userRepository.find();

        users.map((element) => delete element.password)

        return users;
    }
}

export default ShowUserService;