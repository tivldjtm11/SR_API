import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('회원 관리-회원 목록 관리')
@Controller({ path: 'test', version: '1' })
export class TestController {}
