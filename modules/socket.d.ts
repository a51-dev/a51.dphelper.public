/// <reference path="../types/dphelper.d.ts" />
export interface SocketTool {
  info: () => string
  start: (server: any, name: string) => void
  conn: (id: any, server: any, name: string) => void
  connect: (server: any, name: string) => void
  open: (id: any, server: any, name: string) => void
  ping: (name: string) => void
  send: (mex: any, name: string) => void
  receive: (func: Function, name: string) => void
  keepAlive: (name: string) => void
  check: () => void
  list: () => WebSocket[]
  close: (name: string) => void
}

export const socket: SocketTool
