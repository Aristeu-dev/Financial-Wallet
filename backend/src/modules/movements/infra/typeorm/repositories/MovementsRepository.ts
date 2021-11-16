import Movement from '../entities/Movement';

import IMovementsRepository from '@modules/movements/repositories/IMovementsRepository';
import { getRepository, Repository } from 'typeorm'
import ICreateMovementDTO from '@modules/movements/dtos/ICreateMovementDTO'

class MovementRepository implements IMovementsRepository {
    private ormRepository: Repository<Movement>;

    constructor() {
        this.ormRepository = getRepository(Movement);
    }

    //todos os métodos referente a buscas por variáveis do Moviment será feito aqui
    // public async findMovementByDate(created_at: Date): Promise<Movement[] | undefined> {
    //     const findMovement = await this.ormRepository.find({
    //         where: { created_at }
    //     });
    //     return findMovement || undefined;
    // }

    public async create({ id_category, value, description }: ICreateMovementDTO): Promise<Movement> {
        const movement = this.ormRepository.create({ id_category, value, description });
        await this.ormRepository.save(movement);
        return movement;
    }
}

export default MovementRepository;