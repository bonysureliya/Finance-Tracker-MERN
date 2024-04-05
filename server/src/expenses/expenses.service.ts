import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExpensesService {

  constructor(private readonly prismaService: PrismaService) { }

  create(createExpenseDto: Prisma.ExpenseCreateInput) {
    return this.prismaService.expense.create({ data: createExpenseDto });
  }

  findAll() {
    return this.prismaService.expense.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.expense.findUnique({ where: { id: id.toString() } });
  }

  update(id: number, updateExpenseDto: Prisma.ExpenseUpdateInput) {
    return this.prismaService.expense.update({ where: { id: id.toString() }, data: updateExpenseDto });
  }

  remove(id: number) {
    return this.prismaService.expense.delete({ where: { id: id.toString() } });
  }
}
