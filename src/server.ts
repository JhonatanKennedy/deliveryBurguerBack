import express from 'express';
import routes  from './routes/index';
import 'reflect-metadata';
import './database/index';
import uploadConfig from './config/upolad';


const App = express();

App.use(express.json());
App.use('/files', express.static(uploadConfig.directory));
App.use(routes);

App.listen(3333,() => console.log('server On---------------------------------------------------------------'));
