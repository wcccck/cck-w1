export enum MessageStatus{
  SENDING =0,//发送中
  SENT,//已经发送
  RECEIVING, //接受中
  RECEIVED, // 已经收到
  READED, //已读
  ERROR //错误
}

export enum MessageType{
  SEND =0,//发送的消息
  RECEIVED, // 接受的消息
  SYSTEM, // 系统消息
  NOTIFY
}

export type Message = TextMessage | ImageMessage

interface MessageData {
  id :number,//消息的id
  status:MessageStatus,//消息状态
  type:MessageType,//消息类型
  from:number,//发送者
  to:number//接受者
}

export interface TextMessage extends MessageData{
  msg:string,
}

export interface ImageMessage extends MessageData{
  url:string
}