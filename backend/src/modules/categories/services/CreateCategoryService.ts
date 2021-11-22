import Category from "../infra/typeorm/entities/Category";
import CategoriesRepository from "../infra/typeorm/repositories/MovementsRepository";
import { getCustomRepository } from "typeorm";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import { injectable, inject } from "tsyringe";
interface IRequest {
  user_id: String;
  name: String;
  type: String;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private CategoriesRepository: ICategoriesRepository
  ) {}

  public async execute({ user_id, name, type }: IRequest): Promise<Movement> {
    // const movementsRepository = getCustomRepository(MovementsRepository);

    const category = await this.CategoriesRepository.create({
      user_id,
      name,
      type,
    });

    return category;
  }
}

export default CreateCategoryService;
