import { Controller, Get, Query } from '@nestjs/common';
import { Addnumberinfo } from './dto/add-number.dto';
@Controller('employee')
export class EmployeeController {
  @Get()
  async getnumberinfo(@Query() query: Addnumberinfo): Promise<string> {
    const { num1, num2 } = query;
    const result = num1 + num2;
    return 'result of addding 2 number ' + result;
  }
}
