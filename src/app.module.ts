import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Initialize ConfigModule and load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally (optional)
      envFilePath: '.env', // Specify the path to your .env file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
