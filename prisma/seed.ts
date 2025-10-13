import { PrismaClient } from '../app/generated/prisma';
const prisma = new PrismaClient();

async function main() {

    const demoUserId = "b6e3657e-97c5-4cbc-b5b8-ae533d08cbe8";

    //create sample products
    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),


        })),

    });

    console.log("Seed data created succesfully");
    console.log(`Created 25 products for the User Id: ${demoUserId}`);
}



main()
    .catch((e) => {
    console.error(e);
    process.exit(1);

})
    .finally(async () => {
        await prisma.$disconnect();

    });