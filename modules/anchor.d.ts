/// <reference path="../types/dphelper.d.ts" />
export interface AnchorTool {
  /**
   * Converts anchor tags to onClick events
   * @param selector - CSS selector for target elements
   */
  toOnClick(selector: string): void
}

export const anchor: AnchorTool
