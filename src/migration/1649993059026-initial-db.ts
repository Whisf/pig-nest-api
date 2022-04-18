import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDb1649993059026 implements MigrationInterface {
    name = 'initialDb1649993059026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`detailId\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task_result\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`comment\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`username\` varchar(255) NOT NULL, \`isAvaiable\` tinyint NOT NULL, \`parentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`expense_today\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`total\` int NOT NULL DEFAULT '0', \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category_expense\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_closure\` (\`acestorid\` int NOT NULL, \`descendantid\` int NOT NULL, INDEX \`IDX_b07202035ba56db5d12cc173c8\` (\`acestorid\`), INDEX \`IDX_1a9cb93b3b433d77f8306d3fda\` (\`descendantid\`), PRIMARY KEY (\`acestorid\`, \`descendantid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_f316d3fe53497d4d8a2957db8b9\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task_result\` ADD CONSTRAINT \`FK_bf4c4684714075ba8d15635dd99\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c86f56da7bb30c073e3cbed4e50\` FOREIGN KEY (\`parentId\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`expense_today\` ADD CONSTRAINT \`FK_8ee01a3fbc282f32d3d880ad705\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_closure\` ADD CONSTRAINT \`FK_b07202035ba56db5d12cc173c89\` FOREIGN KEY (\`acestorid\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_closure\` ADD CONSTRAINT \`FK_1a9cb93b3b433d77f8306d3fda1\` FOREIGN KEY (\`descendantid\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_closure\` DROP FOREIGN KEY \`FK_1a9cb93b3b433d77f8306d3fda1\``);
        await queryRunner.query(`ALTER TABLE \`user_closure\` DROP FOREIGN KEY \`FK_b07202035ba56db5d12cc173c89\``);
        await queryRunner.query(`ALTER TABLE \`expense_today\` DROP FOREIGN KEY \`FK_8ee01a3fbc282f32d3d880ad705\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c86f56da7bb30c073e3cbed4e50\``);
        await queryRunner.query(`ALTER TABLE \`task_result\` DROP FOREIGN KEY \`FK_bf4c4684714075ba8d15635dd99\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_f316d3fe53497d4d8a2957db8b9\``);
        await queryRunner.query(`DROP INDEX \`IDX_1a9cb93b3b433d77f8306d3fda\` ON \`user_closure\``);
        await queryRunner.query(`DROP INDEX \`IDX_b07202035ba56db5d12cc173c8\` ON \`user_closure\``);
        await queryRunner.query(`DROP TABLE \`user_closure\``);
        await queryRunner.query(`DROP TABLE \`category_expense\``);
        await queryRunner.query(`DROP TABLE \`expense_today\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`task_result\``);
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
