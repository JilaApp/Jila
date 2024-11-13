import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.videos.create({
      data: {
        title: "new medical video",
        type: "MEDICAL",
        length: "2:34",
        link: "cen0rBKLuYE",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
