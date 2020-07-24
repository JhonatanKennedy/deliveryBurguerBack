import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('checkout')
class Checkout {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    id_user: string;

    @ManyToOne(() => User )
    @JoinColumn({ name: 'id_user'})
    checkout: User;

    @Column('uuid')
    id_address:string;

    @Column('bool')
    inProgress: Boolean;

    @CreateDateColumn()
    created_at: Date;

}

export default Checkout;