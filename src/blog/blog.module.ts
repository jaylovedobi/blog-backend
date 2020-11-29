import { blogschema } from './schemas/blog.schema';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [ MongooseModule.forFeature([{name:'Post',schema: blogschema}])],
    controllers: [
        BlogController,],
    providers: [
        BlogService,],
})
export class BlogModule { }
