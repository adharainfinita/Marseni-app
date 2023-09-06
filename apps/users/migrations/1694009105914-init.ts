import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1694009105914 implements MigrationInterface {
    name = 'Init1694009105914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enterprise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name_organization" character varying NOT NULL, "cuit" character varying NOT NULL, "type_service" character varying NOT NULL, "ceo_id" character varying NOT NULL, CONSTRAINT "UQ_623d693818470b2dafb826ec68d" UNIQUE ("cuit"), CONSTRAINT "PK_09687cd306dc5d486c0e227c471" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "nss" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "enterprise_id" character varying NOT NULL, "salary_amount" integer NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."citizens_pronoums_enum" AS ENUM('she', 'he', 'they', 'others')`);
        await queryRunner.query(`CREATE TYPE "public"."citizens_job_status_enum" AS ENUM('employed', 'unemployed')`);
        await queryRunner.query(`CREATE TABLE "citizens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "dni" integer NOT NULL, "date_birth" TIMESTAMP NOT NULL, "email" character varying NOT NULL, "principal_address" character varying NOT NULL, "cuil" character varying NOT NULL, "pronoums" "public"."citizens_pronoums_enum" NOT NULL, "job_status" "public"."citizens_job_status_enum" NOT NULL, CONSTRAINT "UQ_a301ea3595e12728b7e6bf674f8" UNIQUE ("dni"), CONSTRAINT "UQ_f419beb584c5bdd57652049bdad" UNIQUE ("email"), CONSTRAINT "PK_125518d98ee3b4cf52b8ab14a43" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "citizens"`);
        await queryRunner.query(`DROP TYPE "public"."citizens_job_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."citizens_pronoums_enum"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "enterprise"`);
    }

}
