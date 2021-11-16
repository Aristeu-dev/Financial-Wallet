import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import '@shared/infra/typeorm';
import AppError from '@shared/erros/AppError';
import '@shared/container'
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

app.use((err: Error | AppError, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }

    console.error(err);

    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
    console.log('server started');
})