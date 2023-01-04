import path from 'path'
import { Sequelize } from "sequelize";

export class DB {
  static sequelize : Sequelize

  static getSequelize(){
    if(!DB.sequelize){
      DB.sequelize = new Sequelize ({
        dialect:'sqlite',
        storage:path.resolve(__dirname,'mydb.db')
      })
    }
    return DB.sequelize
  }
}