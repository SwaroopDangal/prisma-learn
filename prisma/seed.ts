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
      {
        name: "Swaroop Dangal",
        email: "swaroop@example.com",
        nationality: "Nepali",
        isMarried: false,
        age: 23,
      },
      {
        name: "Aayush Sharma",
        email: "aayush@example.com",
        nationality: "Indian",
        isMarried: false,
        age: 27,
      },
      {
        name: "Sita Karki",
        email: "sita@example.com",
        nationality: "Nepali",
        isMarried: true,
        age: 31,
      },
      {
        name: "Ram Thapa",
        email: "ram@example.com",
        nationality: "Nepali",
        isMarried: true,
        age: 35,
      },
      {
        name: "Anisha Gurung",
        email: "anisha@example.com",
        nationality: "Nepali",
        isMarried: false,
        age: 24,
      },
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
