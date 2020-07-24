import { Router } from 'express';
import CreateUserService from '../services/user/CreateUserService';
import CreateAddressService from '../services/user/CreateAddressService';
import ShowAddressService from '../services/user/ShowAddressService';
import ChangeAddressService from '../services/user/ChangeAddressService'
import DeleteAddressService from '../services/user/DeleteAddressService';
import ShowProductsService from '../services/shared/ShowProductsService';
import ShowExtraService from '../services/shared/ShowExtraService';
import CreateCheckoutService from '../services/user/CreateCheckoutService';
import ShowCheckoutService from '../services/user/ShowCheckoutService';

import ensureAuthentication from '../middlewares/ensureAuthenticated';


const userRouter = Router();

userRouter.post('/', async (request,response)=>{
    try {
        const data = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute(data);    

        delete user.password;

        return response.send(user);
    } catch ( err ) {
        return response.status(400).json({ error: err.message });
    }

});

userRouter.get('/products', async (request, response) => {
    try {
        const data = request.body;
        const showProducts = new ShowProductsService();
        const products = await showProducts.execute(data);
        
        return response.send(products);
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

userRouter.get('/extras', async (request, response) => {
    try {
        const data = request.body;
        const showExtras = new ShowExtraService();
        const extras = await showExtras.execute(data);

        return response.send(extras);
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

userRouter.post('/address', ensureAuthentication, async (request, response) => {
    try {
        const data = request.body;

        const createAddress = new CreateAddressService();

        await createAddress.execute(data);

        return response.json({ message: 'Endereço cadastrado com sucesso!'});
    } catch ( err ) {
        return response.status(400).json({err: err.message })
    }
});

userRouter.get('/address', ensureAuthentication, async (request, response) =>{
        try {
            const data = request.body;
            const showAddress = new ShowAddressService();
            const addresses = await showAddress.execute(data);

            return response.send(addresses);
        } catch ( err ) {
            return response.status(400).json({ err: err.message });
        }
});

userRouter.delete('/address', ensureAuthentication, async (request, response) =>{
    try {
        const data = request.body;
        const deleteAddress = new DeleteAddressService();
        await deleteAddress.execute(data);

        return response.send({ message: 'Endereço deletado!' })
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

userRouter.put('/address', ensureAuthentication, async (request,response) => {
    try {
        const data = request.body;
        const changeAddress = new ChangeAddressService ();

        await changeAddress.execute(data);

        return response.send({ message: 'Endereço editado com sucesso!'});

    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

userRouter.post('/checkout', async (request,response) => {
    try {
        const data = request.body;
        const createCheckout = new CreateCheckoutService();
        await createCheckout.execute(data);
        return response.status(200).json({message: 'Pedido Realizado com sucesso!'});
    }catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

userRouter.get('/checkout', async (request,response) => {
    try {
        const data = request.body;
        const showCheckout = new ShowCheckoutService();
        const history = await showCheckout.execute(data);
        
        return response.send(history);
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

export default userRouter;