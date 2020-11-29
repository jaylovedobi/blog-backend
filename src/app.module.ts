import { BlogModule } from './blog/blog.module';
import { BlogModule } from './blog.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BlogModule,

    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
