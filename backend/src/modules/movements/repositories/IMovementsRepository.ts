import Movement from '../infra/typeorm/entities/Movement';
import ICreateMovementDTO from '../dtos/ICreateMovementDTO';

export default interface IMovementsRepository {
    create(id_category:ICreateMovementDTO, value: ICreateMovementDTO, description: ICreateMovementDTO): Promise<Movement>;
    // findMovementByDate(date: Date): Promise<Movement[] | undefined>;
    
}