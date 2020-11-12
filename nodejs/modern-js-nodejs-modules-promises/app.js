import { resHandler } from './response-handler.js';
import express from 'express';

const app = express();

app.get('/', resHandler);

app.listen(3000);
