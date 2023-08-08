import { Controller, Get } from '@nestjs/common'
import AppService from './app.service'

@Controller('/api')
export default class AppController {
  constructor(private appService: AppService) {}

  @Get()
  get() {}
}