import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';

const sessionsRouter = Router();


interface UserResponse {
    email: string;
    password?: string;
}

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticateUserService);
    const { user, token } = await authenticateUser.execute({
        email,
        password
    })
    const userResponse: UserResponse = user;
    delete userResponse.password;
    return response.json({ userResponse, token })

});

export default sessionsRouter;