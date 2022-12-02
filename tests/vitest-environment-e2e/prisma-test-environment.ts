import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import path from "path";
import { Database } from 'sqlite3';
import { promisify } from "util";

const execAsync = promisify(execSync);

export class PrismaTestEnviroment {
    private prismaBinary: string;
    private prismaClient: PrismaClient;
    private databaseName: string;
    private connectionString: string;

    constructor () {
        this.prismaBinary = path.join(__dirname, '..', 'node_modules', '.bin', 'prisma');
        this.prismaClient = new PrismaClient();
        this.databaseName = `test_${crypto.randomUUID().split('-').join('_')}`;
        this.connectionString = process.env.DATABASE_URL || '';
    }

    async setup() {
        await execAsync(`${this.prismaBinary} migrate deploy`);
    }

    async teardown() {
        const sqliteClient = new Database(':memory:');

        sqliteClient.close();

        await this.prismaClient?.$disconnect();
    }
}