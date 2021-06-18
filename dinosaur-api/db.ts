import { config } from './deps.ts';
import DinosaurSchema from './schema.ts';
import { MongoClient } from './deps.ts';

const { DB, DB_USER, DB_PASSWORD, DB_CLUSTER0, DB_CLUSTER1, DB_CLUSTER2 } =
  config();

// const connectStr = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bchjh.mongodb.net/${DB}?retryWrites=true&w=majority`;

const client = new MongoClient();

await client.connect({
  db: DB,
  tls: true,
  servers: [
    {
      host: DB_CLUSTER0,
      port: 27017,
    },
    {
      host: DB_CLUSTER1,
      port: 27017,
    },
    {
      host: DB_CLUSTER2,
      port: 27017,
    },
  ],
  credential: {
    username: DB_USER,
    password: DB_PASSWORD,
    db: DB,
    mechanism: 'SCRAM-SHA-1',
  },
});

const db = client.database(DB);

const dinosaurCollection = db.collection<DinosaurSchema>('dinosaurs');

export { db, dinosaurCollection };
