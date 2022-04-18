import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDb1650269146655 implements MigrationInterface {
    name = 'initialDb1650269146655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`createAt_index\` ON \`task\``);
        await queryRunner.query(`DROP INDEX \`FK_f316d3fe53497d4d8a2957db8b9\` ON \`task\``);
        await queryRunner.query(`DROP INDEX \`FK_bf4c4684714075ba8d15635dd99\` ON \`task_result\``);
        await queryRunner.query(`DROP INDEX \`createAt\` ON \`expense_today\``);
        await queryRunner.query(`DROP INDEX \`FK_62e08fd8369c95c4129eca36bd5\` ON \`expense_today\``);
        await queryRunner.query(`DROP INDEX \`FK_8ee01a3fbc282f32d3d880ad705\` ON \`expense_today\``);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`task_result\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_f316d3fe53497d4d8a2957db8b9\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task_result\` ADD CONSTRAINT \`FK_bf4c4684714075ba8d15635dd99\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD CONSTRAINT \`FK_62e08fd8369c95c4129eca36bd5\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_expense\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD CONSTRAINT \`FK_8ee01a3fbc282f32d3d880ad705\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP FOREIGN KEY \`FK_8ee01a3fbc282f32d3d880ad705\``);
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP FOREIGN KEY \`FK_62e08fd8369c95c4129eca36bd5\``);
        await queryRunner.query(`ALTER TABLE \`task_result\` DROP FOREIGN KEY \`FK_bf4c4684714075ba8d15635dd99\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_f316d3fe53497d4d8a2957db8b9\``);
        await queryRunner.query(`ALTER TABLE \`task_result\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_8ee01a3fbc282f32d3d880ad705\` ON \`expense_today\` (\`userId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_62e08fd8369c95c4129eca36bd5\` ON \`expense_today\` (\`categoryId\`)`);
        await queryRunner.query(`CREATE INDEX \`createAt\` ON \`expense_today\` (\`createAt\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_bf4c4684714075ba8d15635dd99\` ON \`task_result\` (\`userId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_f316d3fe53497d4d8a2957db8b9\` ON \`task\` (\`userId\`)`);
        await queryRunner.query(`CREATE INDEX \`createAt_index\` ON \`task\` (\`createAt\`)`);
    }

}