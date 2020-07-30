import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCheckout1595443762780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'checkout',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'id_user',
                    type: 'uuid'
                },
                {
                    name: 'id_address',
                    type: 'uuid'
                },
                {
                    name: 'inProgress',
                    type: 'bool'
                },
                {
                    name:'estimated_time',
                    type:'int',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
        await queryRunner.createForeignKey('checkout', new TableForeignKey({
            name:'checkoutUser',
            columnNames: ['id_user'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('checkout','checkoutUser');
        await queryRunner.dropTable('checkout');
    }

}
