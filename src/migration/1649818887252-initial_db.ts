import { MigrationInterface, QueryRunner } from 'typeorm'

export class initialDb1649818887252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_db" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "email" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'BASIC', "lastActivity" jsonb NOT NULL DEFAULT '"2022-04-02T16:22:54.088Z"', "authzUserId" character varying NOT NULL, "parentId" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
