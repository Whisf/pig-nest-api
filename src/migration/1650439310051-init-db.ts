import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1650439310051 implements MigrationInterface {
    name = 'initDb1650439310051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "detailId" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_result" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "comment" character varying NOT NULL, "status" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_623dd43986d67c74bad752b37a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "email" character varying NOT NULL, "isAvaiable" boolean NOT NULL DEFAULT true, "parentId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "expense_today" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "total" integer NOT NULL DEFAULT '0', "detail" character varying NOT NULL, "categoryId" integer, "userId" integer, CONSTRAINT "PK_d061e4469d202e293b6cd54a76c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_expense" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, CONSTRAINT "PK_20e8ce5bba401cb65008c8dc6a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_closure" ("acestorid" integer NOT NULL, "descendantid" integer NOT NULL, CONSTRAINT "PK_7c5518b33178b1862c163186698" PRIMARY KEY ("acestorid", "descendantid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b07202035ba56db5d12cc173c8" ON "user_closure" ("acestorid") `);
        await queryRunner.query(`CREATE INDEX "IDX_1a9cb93b3b433d77f8306d3fda" ON "user_closure" ("descendantid") `);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task_result" ADD CONSTRAINT "FK_bf4c4684714075ba8d15635dd99" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c86f56da7bb30c073e3cbed4e50" FOREIGN KEY ("parentId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense_today" ADD CONSTRAINT "FK_62e08fd8369c95c4129eca36bd5" FOREIGN KEY ("categoryId") REFERENCES "category_expense"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense_today" ADD CONSTRAINT "FK_8ee01a3fbc282f32d3d880ad705" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_closure" ADD CONSTRAINT "FK_b07202035ba56db5d12cc173c89" FOREIGN KEY ("acestorid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_closure" ADD CONSTRAINT "FK_1a9cb93b3b433d77f8306d3fda1" FOREIGN KEY ("descendantid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_closure" DROP CONSTRAINT "FK_1a9cb93b3b433d77f8306d3fda1"`);
        await queryRunner.query(`ALTER TABLE "user_closure" DROP CONSTRAINT "FK_b07202035ba56db5d12cc173c89"`);
        await queryRunner.query(`ALTER TABLE "expense_today" DROP CONSTRAINT "FK_8ee01a3fbc282f32d3d880ad705"`);
        await queryRunner.query(`ALTER TABLE "expense_today" DROP CONSTRAINT "FK_62e08fd8369c95c4129eca36bd5"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c86f56da7bb30c073e3cbed4e50"`);
        await queryRunner.query(`ALTER TABLE "task_result" DROP CONSTRAINT "FK_bf4c4684714075ba8d15635dd99"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1a9cb93b3b433d77f8306d3fda"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b07202035ba56db5d12cc173c8"`);
        await queryRunner.query(`DROP TABLE "user_closure"`);
        await queryRunner.query(`DROP TABLE "category_expense"`);
        await queryRunner.query(`DROP TABLE "expense_today"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task_result"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
