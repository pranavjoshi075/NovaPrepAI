/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_4XO8pwtbniRK@ep-patient-rice-a8zs482a-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
};