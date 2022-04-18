import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationV11649994861947 implements MigrationInterface {
    name = 'migrationV11649994861947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`isAvaiable\` \`isAvaiable\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`isAvaiable\` \`isAvaiable\` tinyint NOT NULL`);
    }

}
