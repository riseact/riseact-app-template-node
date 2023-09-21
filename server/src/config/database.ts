import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // set log level to `query` or `info` to see Prisma Client queries
  // log: ['query', 'info', 'warn'],
});
