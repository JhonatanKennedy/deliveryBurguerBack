import { Router } from 'express';
import Product from '../models/Product';
import Extra from '../models/Extra';
import CreateProductService from '../services/admin/CreateProductService';
import ChangeProductService from '../services/admin/ChangeProductService';
import DeleteProductService from '../services/admin/DeleteProductService';
import ShowProductsService from '../services/shared/ShowProductsService';
import CreateExtraService from '../services/admin/CreateExtraService';
import ChangeExtraService from '../services/admin/ChangeExtraService';
import DeleteExtraService from '../services/admin/DeleteExtraService';
import ShowExtraService from '../services/shared/ShowExtraService';
import ShowUserService from '../services/admin/ShowUserService';
import DeleteUserService from '../services/admin/DeleteUserService';
import CreateCategoryService from '../services/admin/CreateCategoryService';
import ShowCategoryService from '../services/shared/ShowCategoryService';
import ChangeCategoryService from '../services/admin/ChangeCategoryService';
import UpdatePhotoService from '../services/admin/UpdatePhotoService';



import multer from 'multer';
import uploadConfig from '../config/upolad';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const adminRouter = Router();
const upload = multer(uploadConfig);

upload.single('product')

adminRouter.post('/product', async (request, response) => {
    try{
        const data: Omit<Product,'id'> = request.body;
        //data.photo = request.file.path;
        const createProduct = new CreateProductService();
        
        const product = await createProduct.execute(data);
    
        return response.send(product);
    } catch ( err ){
        return response.status(400).json({error: err.message});
    }
});

adminRouter.get('/product', async (request, response) => {
    try {
        const data = request.body;
        const showProducts = new ShowProductsService();

        const products = await showProducts.execute(data);
    
        return response.send(products);
    } catch ( err ) {
        return response.status(400).json({error: err.message});
    }
});

adminRouter.put('/product', async (request, response) => {
    try { 
        const data: Product = request.body;

        const changedProduct = new ChangeProductService();
    
        await changedProduct.execute(data);
    
        return response.status(200).json({ message: 'Produto editado com sucesso'});
    } catch ( err ) {
        return response.status(400).json({ error: err.message });
    }

});

adminRouter.delete('/product', async (request,response) => {
    try {
        const id = request.body;

        const deleteProduct = new DeleteProductService();
    
        await deleteProduct.execute(id);

        return response.status(200).json({message: 'Produto deletado'});
    } catch ( err ) {
        return response.status(400).send({error: err.message});
    }
});

adminRouter.post('/extra', async (request, response) => {
    try {
        const data: Omit<Extra, 'id'> = request.body;
    
        const createExtra = new CreateExtraService();
    
        const extra = await createExtra.execute(data);
    
        return response.send(extra);
    } catch ( err ) {
        return response.status(400).json({ error: err.message });
    }
    
});

adminRouter.get('/extra', async (request, response) => {
    try{
        const data = request.body;
        const showExtras = new ShowExtraService();

        const extras = await showExtras.execute(data);

        return response.send(extras);

    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

adminRouter.put('/extra', async (request,response) => {
    
    try {
        const data = request.body;
        console.log(data);
        const changeExtra = new ChangeExtraService();
        await changeExtra.execute(data);

        return response.json({ message: 'Adicional editado com sucesso!' });
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

adminRouter.delete('/extra', async (request,response) => {
    try {
        const id = request.body;

        const deleteExtra = new DeleteExtraService();

        await deleteExtra.execute(id);

        return response.status(200).json({message: 'Produto deletado'});
    } catch ( err ) {
        return response.status(400).json({ error: err.message });
    }
});

adminRouter.get('/users', async (request, response) => {
    try {
        const createUser = new ShowUserService();
        const users = await createUser.execute();

        return response.send(users);
    } catch ( err ) {
        return response.status(400).json({ err: err.message })
    }

});

adminRouter.delete('/users', async (request,response) => {
    try {
        const data = request.body;
        const deleteUser = new DeleteUserService()
        await deleteUser.execute(data);

        return response.send({message: 'Usuário deletado com sucesso!'})

    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

adminRouter.post('/category', async (request,response) => {
    try {
        const data = request.body;
        const createCategory = new CreateCategoryService();
        await createCategory.execute(data);
        return response.send({message: 'Categoria criada com sucesso!'});
    }catch ( err ) {
        return response.json({ err: err.message });
    }
});

adminRouter.get('/category', async (request,response) => {
    try {
        const showCategory = new ShowCategoryService();
        const categories = await showCategory.execute();

        return response.send(categories);
    } catch( err ) {
        return response.status(400).json({ err: err.message });
    }
});

adminRouter.put('/category', async (request,response) => {
    try {   
        const data = request.body;
        const changeCategory = new ChangeCategoryService();
        await changeCategory.execute(data);

        return response.status(200).json({ message: 'Categoria editada com sucesso!' });
    } catch ( err ) {
        return response.status(400).json({err: err.message});
    }
});

adminRouter.patch('/photo', upload.single('photo'), async (request, response) => {
    try {
        const { product_id } = request.body;

        const updatePhoto = new UpdatePhotoService();
        const product = await updatePhoto.execute({
            product_id,
            photoFilename: request.file.filename,
        });
        return response.status(200).json(product);
    } catch ( err ) {
        return response.status(400).json({ err: err.message });
    }
});

export default adminRouter;