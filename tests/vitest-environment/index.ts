import type { Environment } from 'vitest';
import { PrismaTestEnviroment } from './prisma-test-environment';

export default <Environment>{
  name: 'prisma',
  setup() {
    const prismaTestEnvironment = new PrismaTestEnviroment();

    prismaTestEnvironment.setup();

    return {
      teardown() {
        prismaTestEnvironment.teardown();
      }
    }
  }
}
