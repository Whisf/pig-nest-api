import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDb1649941748223 implements MigrationInterface {
    name = 'initialDb1649941748223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_closure\` (\`acestorid\` int NOT NULL, \`descendantid\` int NOT NULL, INDEX \`IDX_b07202035ba56db5d12cc173c8\` (\`acestorid\`), INDEX \`IDX_1a9cb93b3b433d77f8306d3fda\` (\`descendantid\`), PRIMARY KEY (\`acestorid\`, \`descendantid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`create_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`parentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`isAvaiable\` \`isAvaiable\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c86f56da7bb30c073e3cbed4e50\` FOREIGN KEY (\`parentId\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_closure\` ADD CONSTRAINT \`FK_b07202035ba56db5d12cc173c89\` FOREIGN KEY (\`acestorid\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_closure\` ADD CONSTRAINT \`FK_1a9cb93b3b433d77f8306d3fda1\` FOREIGN KEY (\`descendantid\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_closure\` DROP FOREIGN KEY \`FK_1a9cb93b3b433d77f8306d3fda1\``);
        await queryRunner.query(`ALTER TABLE \`user_closure\` DROP FOREIGN KEY \`FK_b07202035ba56db5d12cc173c89\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c86f56da7bb30c073e3cbed4e50\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`isAvaiable\` \`isAvaiable\` tinyint(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`parentId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updateAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`update_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`create_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_1a9cb93b3b433d77f8306d3fda\` ON \`user_closure\``);
        await queryRunner.query(`DROP INDEX \`IDX_b07202035ba56db5d12cc173c8\` ON \`user_closure\``);
        await queryRunner.query(`DROP TABLE \`user_closure\``);
    }

}
