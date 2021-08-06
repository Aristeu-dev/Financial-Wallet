import { Router } from 'express';
import MovimentsRepository from '../repositories/MovementsRepository';
import CreateMovementService from '../services/CreateMovementService'
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const movementsRouter = Router();

movementsRouter.use(ensureAuthenticated);

movementsRouter.get('/', async (request, response) => {
    console.log(request.user);
    const movementsRepository = getCustomRepository(MovimentsRepository);
    const movements = await movementsRepository.find();
    return response.json(movements);
})

movementsRouter.post('/', async (request, response) => {
    try {
        const { id_category, value, description } = request.body;

        const createMovement = new CreateMovementService();

        const movement = await createMovement.execute({ id_category, value, description })
        return response.json(movement)
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default movementsRouter;