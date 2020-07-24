import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduct1595352933230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name:'category_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'photo',
                        type: 'varchar',
                    }
                ]
            })
        );
        
        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'categoryId',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products','categoryId');
        await queryRunner.dropTable('products');
    }

}
