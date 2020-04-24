import { Request, Response, NextFunction } from 'express';
import { sampleService } from '../services/sampleService';
// import { userModel } from '../models/userModel';

export class SampleController {
  private static instance: SampleController

  constructor() { }

  static getInstance() {
    if(! SampleController.instance) {
      SampleController.instance = new SampleController()
    }
    return SampleController.instance
  }

  // ただの文字列を返すパターン.
  getResponse1(req: Request, res: Response, next: NextFunction) {
    const smpService = sampleService.getInstance();
    let smpResponse1 = smpService.getService1();
    res.send(`${smpResponse1}`);
  }

  // ルートパラメータを使用したパターン.
  getResponse2(req: Request, res: Response, next: NextFunction) {
    const smpService = sampleService.getInstance();
    let smpResponse2 = smpService.getService2(req.params.id);
    res.json(`${smpResponse2}`)
  }

  // ルートパラメータを使用して値をMongoに登録するパターン.
  getResponse3(req: Request<{ ["id"]: string }>, res: Response, next: NextFunction) {
    const smpService = sampleService.getInstance();
    let smpResponse3 = smpService.getService3(req.params.id);
    console.log(smpResponse3)
    res.json(`${smpResponse3}`)
  }
  
  // ルートパラメータを使用して値をMongoに登録するパターン.
  getResponse4(req: Request<{ ["id"]: string }>, res: Response, next: NextFunction) {
    const smpService = sampleService.getInstance();
    let smpResponse4 = smpService.getService4(req.params.id);
    res.json(`${smpResponse4}`)
  }
}
