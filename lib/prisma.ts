import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { 
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Now you can import and use `prisma` in your application