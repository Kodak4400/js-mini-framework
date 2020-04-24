import { userModel } from '../models/userModel';
import { User } from "../entity/User";

export class sampleService {
  private static instance: sampleService

  constructor() { }

  static getInstance() {
    if(! sampleService.instance) {
      sampleService.instance = new sampleService()
    }
    return sampleService.instance
  }

  getService1() {
    let msg = 'テスト用ページです。'
    return msg;
  }

  getService2(id: string) {
    let msg = `{}`;

    if (id === '1') {
      msg = `{ 'id': ${id} }`
    } else {
      msg = `{ 'id': '2' }`
    }
    return msg;
  }

  getService3(id: string) {
    const userInc = userModel.getInstance();
    const userAllData = userInc.getAll()

    return userAllData.then( rsl => {
      if ( rsl == 'Successful') {
        console.log(userInc.allUsersData)
        hoge = userInc.allUsersData
      }
    })
  }

  getService4(id: string) {
    const userInc = userModel.getInstance();

    let data: User = {
      title: 'テストタイトル',
      text: 'テストテキスト',
      likesCount: 32
    }

    userInc.add(data)

    return 'ok'
  }
}
