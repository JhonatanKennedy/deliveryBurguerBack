import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExtras1594406322059 implements MigrationInterface {

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
                        isNullable: false
                    },
                    {
                        name: 'price',
                        type: 'float',
                        isNullable: false
                    }
                ]
            })
        );
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('extras');
    }

}
