/// <reference path="../types/dphelper.d.ts" />
export interface FetchTool {
  /**
   * Perform a resilient fetch with automatic retries and exponential backoff.
   */
  (url: string, options?: any, retries?: number, backoff?: number): Promise<Response>

  /**
   * Perform a GET request.
   */
  get: (url: string, options?: any) => Promise<Response>

  /**
   * Perform a POST request with optional JSON body auto-serialization.
   */
  post: (url: string, body: any, options?: any) => Promise<Response>
}

export const fetch: FetchTool
