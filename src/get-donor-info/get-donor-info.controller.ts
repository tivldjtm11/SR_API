import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'
import { GetDonorInfoService } from './get-donor-info.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { throwError } from 'rxjs';
import { json } from 'stream/consumers';

@Controller('donor')
@ApiTags('후원자 정보 조회 API')
export class GetDonorInfoController {
    constructor(private getDonorInfoService: GetDonorInfoService){}

    @Get('/info/:id')
    @ApiOperation({summary: '후원자 정보 조회 API', description: '후원자 정보 조회를 진행한다.'})
    @ApiCreatedResponse({type: 'any', description: '후원자 정보 조회를 진행한다.'})
    async getDonorInfo(@Req()req: Request, @Res()res: Response): Promise<any> | undefined{
        try{
            const id = req.params.id
            if(!id) {
                throw new Error("key_error");
            }
            const result = await this.getDonorInfoService.getDonorInfo(id);
            return res.json({data: result});
        }catch(error){
            if(error.message == "key_error"){
                return res.json({message: 'key_error'})
            }
            
        }

    }
    
}
