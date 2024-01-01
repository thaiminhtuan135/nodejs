import { DataSource, DataSourceOptions } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt('12345'),
  username: 'postgres',
  password: 'postgres',
  database: 'billiards',
  synchronize: true, // Đồng bộ hóa các entity với cơ sở dữ liệu
  entities: [`${__dirname}/../entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/**/*.{ts,js}`],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'subscriber',
  },
} as DataSourceOptions);
