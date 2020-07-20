import User from '../models/User';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User > {




}

export default UserRepository;