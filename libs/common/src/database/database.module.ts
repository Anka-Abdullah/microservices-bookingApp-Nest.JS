import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, ModelDefinition } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        connectionFactory: (connection) => {
          console.log(configService.get<string>('MONGODB_URI'));
          
          connection.on('error', (error: any) => {
            console.error('MongoDB connection error:', error);
          });
          return connection;
        },
        retryAttempts: 5,  // default: 30
        retryDelay: 3000,  // default: 500
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]): DynamicModule {
    return MongooseModule.forFeature(models);
  }
}
