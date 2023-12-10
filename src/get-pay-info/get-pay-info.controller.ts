import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { GetPayInfoService } from './get-pay-info.service';

@Controller('pay')
export class GetPayInfoController {

    constructor(private getPayInfoService: GetPayInfoService){}

    @Get('/info/:id')
    async getPayInfo(@Req()req: Request, @Res()res: Response): Promise<any> | undefined {
        const id = req.params.id
        const result = await this.getPayInfoService.getPayInfo(id);
        return res.json({data: result});
        
    }
}
