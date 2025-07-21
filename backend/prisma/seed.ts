const { PrismaClient } = require("../generated/prisma");
 
const prisma = new PrismaClient(); 

async function main() {
    await prisma.role.createMany({
        data: [
            {
                id: 1,
                name: "admin",
                description: "Admin role"
            },
            {
                id: 2,
                name: "collaborator",
                description: "Collaborator role"
            },
            {
                id: 3,
                name: "invited",
                description: "Invited role"
            }
        ]
    })

    await prisma.db_type.createMany({
        data: [
            {
                id: 1,
                name: "postgresql",
                description: "PostgreSQL database"
              },
              {
                id: 2,
                name: "mysql",
                description: "MySQL database"
              }
        ]
    })

    await prisma.field_type.createMany({
        data: [
            {
              id: 1,
              name: "varchar",
              description: "Variable-length character string"
            },
            {
              id: 2,
              name: "text",
              description: "Large text field for long strings"
            },
            {
              id: 3,
              name: "integer",
              description: "Integer number"
            },
            {
              id: 4,
              name: "bigint",
              description: "Large integer number"
            },
            {
              id: 5,
              name: "decimal",
              description: "Fixed-point decimal number"
            },
            {
              id: 6,
              name: "float",
              description: "Floating-point number"
            },
            {
              id: 7,
              name: "boolean",
              description: "Boolean value (true or false)"
            },
            {
              id: 8,
              name: "date",
              description: "Date without time"
            },
            {
              id: 9,
              name: "datetime",
              description: "Date and time"
            },
            {
              id: 10,
              name: "time",
              description: "Time without date"
            },
            {
              id: 11,
              name: "timestamp",
              description: "Timestamp with time zone (PostgreSQL specific)"
            },
            {
              id: 12,
              name: "uuid",
              description: "Universally unique identifier"
            },
            {
              id: 13,
              name: "json",
              description: "JSON formatted data"
            },
            {
              id: 14,
              name: "enum",
              description: "Enumerated type with defined set of values"
            },
            {
              id: 15,
              name: "binary",
              description: "Binary data"
            }
          ]
    })
}

main()
  .then(() => {
    console.log('Seed ejecutado correctamente');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });