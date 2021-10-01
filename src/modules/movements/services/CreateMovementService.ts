import Movement from "../infra/typeorm/entities/Movement";
import IMovementsRepository from "../repositories/IMovementsRepository";
import { injectable, inject } from "tsyringe";
interface IRequest {
  id_category: String;
  value: Number;
  description: String;
}

@injectable()
class CreateMovimentService {
  constructor(
    @inject("MovementsRepository")
    private movementsRepository: IMovementsRepository
  ) {}

  public async execute({
    id_category,
    value,
    description,
  }: IRequest): Promise<Movement> {
    const movement = await this.movementsRepository.create({
      id_category,
      value,
      description,
    });

    return movement;
  }
}

export default CreateMovimentService;
