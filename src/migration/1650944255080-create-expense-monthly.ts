import {MigrationInterface, QueryRunner} from "typeorm";

export class createExpenseMonthly1650944255080 implements MigrationInterface {
    name = 'createExpenseMonthly1650944255080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "expense_monthly" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "daily_expense" integer NOT NULL, "userId" integer, CONSTRAINT "PK_af6fbad3f8cb578dcd105d798da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "expense_monthly" ADD CONSTRAINT "FK_ea3fbb48f848db639c3703b114e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense_monthly" DROP CONSTRAINT "FK_ea3fbb48f848db639c3703b114e"`);
        await queryRunner.query(`DROP TABLE "expense_monthly"`);
    }

}
