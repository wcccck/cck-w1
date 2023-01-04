const STEP = 100000
import { ChatIDSetDao } from "../dao/Dao"
import { DB } from "../dao/DB"
export class ChatIDService{
  private static inst :ChatIDService = new ChatIDService()

  private id_base : number = -1
  private id_start : number = 0

  public static getInstance() : ChatIDService{
    return ChatIDService.inst
  }

  /**
   * 每次拿到的是一个集合的ID
   * 比如 0~99999
   */
  public async requestIdSet(){
    if(this.id_base >= this.id_start && this.id_base < this.id_start + STEP){
      return
    }

    const sequelize = DB.getSequelize()
    const transaction = await sequelize.transaction()

    try {
      const lastRecord = await ChatIDSetDao.findOne({
        order:[["id","desc"]],
        lock:transaction.LOCK.UPDATE
      })
  
      const startNumber = lastRecord ? lastRecord.getDataValue("start") + 100000 : 0
  
      await ChatIDSetDao.create({
        app:"test",
        start:startNumber
      })

      this.id_start = startNumber
      this.id_base = startNumber
    } catch (ex) {
      console.error(ex)
      transaction.rollback()
    }
   

  }

  public async getId(){
    await this.requestIdSet()
    return this.id_base ++
  }
}