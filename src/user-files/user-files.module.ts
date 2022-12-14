import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserFilesService } from './application';
import { MinioFileService } from './domain/minio-file.domain';
import { UserFile } from './infrastructure/entities';
import { UserFileRepository } from './infrastructure/repositories';
import { UserFilesController } from './presentation';

@Module({
  controllers: [UserFilesController],
  providers: [MinioFileService, UserFileRepository, UserFilesService],
  imports: [SequelizeModule.forFeature([UserFile]), JwtModule.register({})],
})
export class FilesModule {}
