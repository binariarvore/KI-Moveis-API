import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTable.ts1693678392749 implements MigrationInterface {
    name = 'AlterTable.ts1693678392749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
