const connectDB = require('../config/db');

async function createUser(userData) {
    try {
        const db = await connectDB();
        const result = await db.collection('users').insertOne(userData);
        return result.ops[0];
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
}

module.exports = createUser;
