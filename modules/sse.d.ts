/// <reference path="../types/dphelper.d.ts" />
export interface SseTool {
  /**
   * Opens an SSE connection with support for custom fetch options (POST, Headers, etc).
   */
  open(url: string, options?: any): {
    on(event: "message" | "error" | "open", cb: (data: any) => void): void
    close(): void
  }
}

export const sse: SseTool
