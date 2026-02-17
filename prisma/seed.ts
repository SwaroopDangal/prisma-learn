import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Swaroop Dangal", email: "swaroop@example.com" },
      { name: "Aayush Sharma", email: "aayush@example.com" },
      { name: "Sita Karki", email: "sita@example.com" },
      { name: "Ram Thapa", email: "ram@example.com" },
      { name: "Anisha Gurung", email: "anisha@example.com" },
    ],
  });
}

seed()
  .then(() => {
    console.log("✅ Seed completed");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
