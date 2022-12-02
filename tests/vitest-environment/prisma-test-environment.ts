import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import path from "path";
import { Database } from 'sqlite3';

export class PrismaTestEnviroment {
    private prismaBinary: string = path.join(__dirname, '..', 'node_modules', '.bin', 'prisma');
    private prismaClient: PrismaClient | null = null;

    setup() {
        execSync(`${this.prismaBinary} db push --preview-feature`);

        this.prismaClient = new PrismaClient();

        return this.prismaClient;
    }

    teardown() {
        const sqliteClient = new Database(':memory:');

        sqliteClient.close();

        this.prismaClient?.$disconnect();
    }
}