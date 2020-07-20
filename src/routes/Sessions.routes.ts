import { Router } from 'express';
import AuthenticateUserService from '../services/sessions/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    try {
        const data = request.body;
        const authenticateUser = new AuthenticateUserService();
        const token = await authenticateUser.execute(data)

        return response.send({token});
    } catch ( err ) {
        return response.json( { err: err.message });
    }

});

sessionRouter.get('/', (request, response) => {
    try {

    } catch ( err ) {
        return response.json( { err: err.message });
    }
});

export default sessionRouter;