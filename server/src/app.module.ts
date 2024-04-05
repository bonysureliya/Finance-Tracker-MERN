import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpensesService } from './expenses/expenses.service';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [ExpensesModule],
  controllers: [AppController],
  providers: [AppService, ExpensesService, PrismaService],
})
export class AppModule { }
