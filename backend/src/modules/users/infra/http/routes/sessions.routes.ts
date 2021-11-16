import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';

const sessionsRouter = Router();


interface User {
    email: string;
    password?: string;
}

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticateUserService);
    const { user :userResponse, token } = await authenticateUser.execute({
        email,
        password
    })
    const user: User = userResponse;
    delete user.password;
    return response.json({ user, token })

});

export default sessionsRouter;