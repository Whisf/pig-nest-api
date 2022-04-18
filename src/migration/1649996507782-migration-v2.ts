import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationV21649996507782 implements MigrationInterface {
    name = 'migrationV21649996507782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD UNIQUE INDEX \`IDX_62e08fd8369c95c4129eca36bd\` (\`categoryId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_62e08fd8369c95c4129eca36bd\` ON \`expense_today\` (\`categoryId\`)`);
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD CONSTRAINT \`FK_62e08fd8369c95c4129eca36bd5\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_expense\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP FOREIGN KEY \`FK_62e08fd8369c95c4129eca36bd5\``);
        await queryRunner.query(`DROP INDEX \`REL_62e08fd8369c95c4129eca36bd\` ON \`expense_today\``);
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP INDEX \`IDX_62e08fd8369c95c4129eca36bd\``);
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP COLUMN \`categoryId\``);
    }

}
