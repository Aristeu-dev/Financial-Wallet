import Movement from '../models/Movement';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Movement)
class MovementRepository extends Repository<Movement> {
    //todos os métodos referente a buscas por variáveis do Moviment será feito aqui
    // public async findMovementByDate(created_at: Date): Promise<Movement[] | null> {
    //     const findMovement = await this.find({
    //         where: { created_at }
    //     });
    //     return findMovement || null;
    // }


}

export default MovementRepository;