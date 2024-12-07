import { Property } from "src/entities/property.entity";
import { PropertyFeature } from "src/entities/propertyFeature.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
  /***
   * database 
   * host
   * username
   * password
   */
  //Don't pur this here, instead put in the env file
  url: 'postgresql://realEstateDB_owner:eWHR47BimyMg@ep-gentle-shape-a5d6gpga.us-east-2.aws.neon.tech/realEstateDB?sslmode=require',
  type: 'postgres',
  port: 3306,
  // entities: [Property, PropertyFeature], // add the Property Entity
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // add the Property Entity
  /**
 * An entity is a class that will be mapped to a table in the database. So intead of creating a table in the database manually. We just create entity clases and TypeORM will create the database Schema with the entity clases that we are going to create in our application.
 */
synchronize: true, //this options automatically updates the database schema based on the entities definitions. It is useful in development mode but not in the production mode. In production mode should be folse.
}
