import { createConnection, ConnectionOptions, Connection } from "typeorm";

export class dbConnection {
  private static connection: Connection;

  constructor() { }

  protected setConnectionOptions(entities: Function[]): ConnectionOptions {
    return {
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "test",
      username: "admin",
      password: "pass",
      authSource: "admin", 
      logging: ["query", "error"],
      // synchronize: true,
      entities: entities,
      useUnifiedTopology: true,
    }
  }

  protected async createConnection(entities: Function[]) {
    if(! dbConnection.connection) {
      try {
        const connectionOptions = this.setConnectionOptions(entities)
        dbConnection.connection = await createConnection(connectionOptions)
      } catch (e) {
        console.error('Error', e)
      }
    }
    return dbConnection.connection
  }
}
