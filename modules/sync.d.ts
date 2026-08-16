/// <reference path="../types/dphelper.d.ts" />
export interface SyncTool {
  /**
   * Synchronize data between tabs using BroadcastChannel.
   */
  tab: (channelName: string, callback: (data: any) => void) => { post: (data: any) => void, close: () => void }
  /**
   * Create a Proxy object linked to localStorage for auto-sync with optional encryption.
   */
  storageProxy: <T extends object>(key: string, initialValue: T, secret?: string) => Promise<T>
  /**
   * Low-latency cross-tab event bus.
   */
  pulse: (channelName: string, callback: (data: any) => void) => { emit: (data: any) => void, stop: () => void }
}

export const sync: SyncTool
