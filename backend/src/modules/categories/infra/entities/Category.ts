import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
@Entity('categories')
class Category {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    user_id: String;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    name: Number;

    @Column()
    type: String;

}

export default Category;