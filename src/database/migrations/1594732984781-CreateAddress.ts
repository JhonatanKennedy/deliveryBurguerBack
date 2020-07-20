import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAddress1594732984781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'additional',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: true
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('address', new TableForeignKey({
            name: 'UserAddress',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address','UserAddress');
        await queryRunner.dropTable('address')
    }

}
