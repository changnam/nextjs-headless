import { PrismaClient } from '@prisma/client';

// global.prisma에 Prisma 클라이언트가 존재할 경우 재사용
const prisma = global.prisma ??
  new PrismaClient({ log: ['query'] });
// Non-Production 환경에서는 global.prisma에 오브젝트를 저장한다.
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;