const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'test-db';

async function connectDB() {
    try {
        const client = await MongoClient.connect(mongoURL, { useNewUrlParser: true });
        return client.db(dbName);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

module.exports = connectDB;
