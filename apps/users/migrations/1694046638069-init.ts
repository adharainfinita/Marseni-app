import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1694046638069 implements MigrationInterface {
    name = 'Init1694046638069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "citizens" ADD "citizen_id" uuid`);
        await queryRunner.query(`ALTER TABLE "citizens" ADD CONSTRAINT "UQ_79e8d649d779550bd79092d3502" UNIQUE ("citizen_id")`);
        await queryRunner.query(`ALTER TABLE "citizens" ADD CONSTRAINT "FK_79e8d649d779550bd79092d3502" FOREIGN KEY ("citizen_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "citizens" DROP CONSTRAINT "FK_79e8d649d779550bd79092d3502"`);
        await queryRunner.query(`ALTER TABLE "citizens" DROP CONSTRAINT "UQ_79e8d649d779550bd79092d3502"`);
        await queryRunner.query(`ALTER TABLE "citizens" DROP COLUMN "citizen_id"`);
    }

}
