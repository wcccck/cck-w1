import { Message } from "./Message";
import { User } from "./User";

export class ChatSession{
  private from :User
  private to :User
  public constructor(from:User,to:User){
    this.from = from
    this.to = to
  }
  public chat(Msg:Message){
    this.from.chat().send(Msg)
    this.to.chat().receive(Msg)
  }
}