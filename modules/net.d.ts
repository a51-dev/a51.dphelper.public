/// <reference path="../types/dphelper.d.ts" />
export interface NetTool {
  /**
   * Smart Fetch with automatic retry and exponential backoff.
   * @param url The URL to fetch.
   * @param options Fetch options (method, headers, body, etc.)
   * @param retries Number of retry attempts (default: 3)
   * @param backoff Initial backoff delay in ms (default: 1000)
   * @returns Promise resolving to the Response
   */
  smartFetch(url: string, options?: RequestInit, retries?: number, backoff?: number): Promise<Response>
}

export const net: NetTool
