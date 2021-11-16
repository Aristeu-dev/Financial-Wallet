import { Router } from 'express';
import CreateMovementService from '@modules/movements/services/CreateMovementService'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { container } from 'tsyringe';

const movementsRouter = Router();


movementsRouter.use(ensureAuthenticated);

// movementsRouter.get('/', async (request, response) => {
//     console.log(request.user);

//     const movements = await movementsRepository.find();
//     return response.json(movements);
// })

movementsRouter.post('/', async (request, response) => {

    const { id_category, value, description } = request.body;

    const createMovement = container.resolve(CreateMovementService);

    const movement = await createMovement.execute({ id_category, value, description })
    return response.json(movement)

});

export default movementsRouter;