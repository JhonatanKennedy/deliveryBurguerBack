import { Router } from 'express';
import userRouter from './User.routes';
import adminRouter from './Admin.routes';
import sessionRouter from './Sessions.routes';

const Routes = Router();

Routes.use('/usr', userRouter);
Routes.use('/admin', adminRouter);
Routes.use('/sessions', sessionRouter);


export default Routes;