const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Default MongoDB URI

// Database Name
const dbName = 'testDB';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB');

        // Select a database
        const adminDb = client.db('admin');
        const databases = await adminDb.admin().listDatabases();
        const dbExists = databases.databases.some(db => db.name === dbName);

        if (!dbExists) {
            console.log(`Database '${dbName}' doesn't exist. Creating it...`);
            // Creating a collection effectively creates the database
            await adminDb.createCollection(dbName);
            console.log(`Database '${dbName}' created successfully.`);
        }

        const db = client.db(dbName);

        // Perform operations with the database
        // Example: insert document
        // await db.collection('yourCollectionName').insertOne({ name: 'John' });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

// Call the connectToMongoDB function
connectToMongoDB();
