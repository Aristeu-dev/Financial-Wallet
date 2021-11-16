import { container } from 'tsyringe';
import IMovementsRepository from '@modules/movements/repositories/IMovementsRepository';
import MovementsRepository from '@modules/movements/infra/typeorm/repositories/MovementsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IMovementsRepository>(
    'MovementsRepository',
    MovementsRepository,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);
