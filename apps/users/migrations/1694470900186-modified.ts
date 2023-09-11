import { MigrationInterface, QueryRunner } from "typeorm";

export class Modified1694470900186 implements MigrationInterface {
    name = 'Modified1694470900186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "enterprise_id" TO "employee_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_f9d306b968b54923539b3936b03" UNIQUE ("employee_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f9d306b968b54923539b3936b03" FOREIGN KEY ("employee_id") REFERENCES "citizens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f9d306b968b54923539b3936b03"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_f9d306b968b54923539b3936b03"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "employee_id" TO "enterprise_id"`);
    }

}
