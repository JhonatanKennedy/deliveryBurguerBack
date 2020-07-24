import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateItem1595451083541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'item',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'product_name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'float'
                },
                {
                    name: 'quantity',
                    type: 'int'
                },
                {
                    name: 'extra_names',
                    type: 'varchar'
                },
                {
                    name: 'notes',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'id_checkout',
                    type: 'uuid'
                }
            ]
        }));

        await queryRunner.createForeignKey('item', new TableForeignKey({
            name: 'itemCheckout',
            columnNames: ['id_checkout'],
            referencedColumnNames: ['id'],
            referencedTableName: 'checkout',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('item','itemCheckout');
        await queryRunner.dropTable('item');
    }

}
