/// <reference path="../types/dphelper.d.ts" />
export interface WorkerPool {
  workers: Worker[]
  busy: Set<Worker>
  queue: Array<{ task: any, resolve: Function, reject: Function }>
  size: number
}

interface WorkerTool {
  create: (src: string, options?: { onmessage?: (e: MessageEvent) => void; onerror?: (e: ErrorEvent) => void }) => Worker
  createInline: (code: string, options?: { onmessage?: (e: MessageEvent) => void; onerror?: (e: ErrorEvent) => void }) => Worker
  post: (worker: Worker, message: any, transferables?: Transferable[]) => void
  terminate: (worker: Worker) => void
  pool: (src: string, size?: number) => WorkerPool
  poolExec: (pool: WorkerPool, tasks: any[]) => Promise<any[]>
  importScripts: (worker: Worker, scripts: string[]) => void
  shared: (src: string, options?: { name?: string; onconnect?: (e: MessageEvent) => void; onmessage?: (e: MessageEvent) => void }) => SharedWorker
}

export const worker: WorkerTool
