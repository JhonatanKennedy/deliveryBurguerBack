import { compare } from 'bcryptjs'
import UserRepository from '../../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import AuthConfig from '../../config/auth';

interface Request {
    email: string;
    password: string;
}

class AuthenticateUserService {
    public async execute( { email, password } : Request ) {
        const usersRepository = getCustomRepository(UserRepository);

        const user = await usersRepository.findOne({ where: { email } });

        if(!user) {
            throw new Error('Email ou senha incorretos!');
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new Error('Email ou senha incorretos!');
        }

        const token = sign({}, AuthConfig.jwt.secret, { 
            subject:user.id,
            expiresIn: AuthConfig.jwt.expiresIn,
        });

        return token;
    }

}

export default AuthenticateUserService; 