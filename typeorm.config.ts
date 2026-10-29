import 'dotenv/config';
import { DataSource } from 'typeorm';

// DataSource usado solo por el CLI de TypeORM (migraciones).
// La app de Nest sigue configurándose en src/app.module.ts.
export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_DATABASE ?? 'ms_cinema',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
