import {MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm";

export class CreateExtra1595358966782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'extras',
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
                        name:'category_id',
                        type:'uuid',
                        isNullable: true
                    }
                ]
            })
        );
        await queryRunner.createForeignKey('extras', new TableForeignKey({
            name: 'categoryId',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('extras','categoryId');
        await queryRunner.dropTable('extras');
    }

}
