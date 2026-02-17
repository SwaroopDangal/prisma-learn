import express from "express";
import { prisma } from "./db";

const app = express();
app.use(express.json());

// Query to fetch all married users above the age of 32
// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: { isMarried: true, age: { gt: 32 } },
//   });
//   res.json(users);
// });

// Query to fetch married or nepali users

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       OR: [{ isMarried: true }, { nationality: "Nepali" }],
//     },
//   });
//   res.json(users);
// });

// WHO are not nepali
// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       nationality: { not: "Nepali" },
//     },
//   });
//   res.json(users);
// });

// Nationality nepal or indina
// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       nationality: {
//         in: ["Nepali", "Indian"],
//       },
//     },
//   });
//   res.json(users);
// });

app.put("/users", async (req, res) => {
  const updatedUser = await prisma.user.update({
    where: {
      email: "aayush@example.com",
    },
    data: {
      age: 55,
    },
  });
  res.json(updatedUser);
});

app.delete("/users", async (req, res) => {
  const deletedUser = await prisma.user.delete({
    where: {
      email: "aayush@example.com",
    },
  });
  res.json(deletedUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
