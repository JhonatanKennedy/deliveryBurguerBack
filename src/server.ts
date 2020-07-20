import express from 'express';
import routes  from './routes/index';
import 'reflect-metadata';
import './database/index';


const App = express();

App.use(express.json());
App.use(routes);

App.listen(3333,() => console.log('server On---------------------------------------------------------------'));
