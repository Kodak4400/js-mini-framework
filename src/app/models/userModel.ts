import "reflect-metadata";
import { dbConnection } from '../common/dbConnection'
import { User } from "../entity/User";

export class userModel extends dbConnection {
  private static instance: userModel

  constructor(private allUsers: User[] = []) {
    super()
  }

  get allUsersData(): User[] {
    return this.allUsers
  }

  set allUsersData(result: User[] ) {
    this.allUsers = result
  }

  static getInstance() {
    if(! userModel.instance) {
      userModel.instance = new userModel()
    }
    return userModel.instance
  }

  public async getAll() {
    const connection = super.createConnection([User])
    let result = 'Successful'

    try{
      let res = await connection.then( connection => connection.getRepository(User).find() )
      this.allUsersData = res
    } catch(e) {
      console.error('Error', e)
      result = 'Error'
    }

    return Promise.resolve(result)
  }

  public async add<T extends User>(data: T ) {
    const connection = super.createConnection([User])

    const user = new User();
    user.text = data.text;
    user.title = data.title;
    user.likesCount = data.likesCount;

    try{
      await connection.then( connection => {
        connection.getRepository(User).save(user)
      })
      console.log("Post has been saved: ", user)
    } catch(e) {
      console.error('Error', e)
    }

    return user
  }


}
