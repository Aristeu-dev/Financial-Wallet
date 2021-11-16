import { Router } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';

interface Response {
    name: string;
    email: string;
    password?: string;
}
const usersRouter = Router();

usersRouter.post('/', async (request, response) => {

    const { name, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user: Response = await createUser.execute({
        name,
        email,
        password
    })
    delete user.password;
    return response.json(user)

});

export default usersRouter;