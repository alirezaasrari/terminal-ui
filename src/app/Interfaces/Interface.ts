export interface IData {
  id: number;
  startByte?: string;
  packetLength?: string;
  dataLoggerSerialNumber?: string;
  packetTag?: string;
  commandVersion?: string;
  commandCode?: string;
  dataLength?: string;
  data?: string;
  crc?: string;
  date?: string;
  dataLoggerSerialInDecimal: number;
  commandCodeMeaning?: string;
  commandVersionMeaning?: string;
  dataContent?: string;
  ipAndPort?: string;
  isCrcValid?: string;
  response? :string;
  isDataLoggerValid? :number;
}

export interface IError {
  id: number;
  message: string;
  date: string;
  wrongPacket: string;
  endpoint:string;
}

export interface IIoError {
  id: number;
  message: string;
  date: string;
}

export interface ISocketError {
  id: number;
  message: string;
  date: string;
}
