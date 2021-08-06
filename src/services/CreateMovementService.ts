import Movement from '../models/Movement';
import MovementsRepository from '../repositories/MovementsRepository';
import { getCustomRepository } from 'typeorm';
interface Request {
    id_category: String,
    value: Number,
    description: String
}
class CreateMovimentService {

    public async execute({ id_category, value, description }: Request): Promise<Movement> {
        const movementsRepository = getCustomRepository(MovementsRepository);

        const movement = movementsRepository.create({
            id_category,
            value,
            description
        });
        await movementsRepository.save(movement);
        return movement;
    }

}

export default CreateMovimentService;