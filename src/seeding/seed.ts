// import { pgConfig } from '../..dbConfig';
import pgConfig from '../config/db.config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { MainSeeder } from './main.seeder';

const options: DataSourceOptions & SeederOptions = {
  // ...pgConfig,
  ...pgConfig(), //since is a factory funcion. we are not importing the object diractly but instead a funciontion which will return the object , so we need to execute it. so we call it and spread the retuned object properties.
  factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});
