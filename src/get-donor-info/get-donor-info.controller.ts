import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'
import { GetDonorInfoService } from './get-donor-info.service';

@Controller('donor')
export class GetDonorInfoController {
    constructor(private getDonorInfoService: GetDonorInfoService){}

    @Get('/info/:id')
    async getDonorInfo(@Req()req: Request, @Res()res: Response): Promise<any> | undefined{
        const id = req.params.id
        console.log(id);
        const result = await this.getDonorInfoService.getDonorInfo(id);
        
        console.log(result,111111111)

        return res.json({message: result});
    }
    
}
