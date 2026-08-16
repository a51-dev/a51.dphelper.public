/// <reference path="../types/dphelper.d.ts" />
export interface TriggersTool {
  /**
   * Add a trigger for custom events.
   * @param event - The event name
   * @param callback - The callback to execute when the event is triggered
   */
  add: (event: string, callback: (...args: any[]) => void) => void

  /**
   * Listen for a trigger event (alias for add).
   */
  on: (event: string, callback: (...args: any[]) => void) => void

  /**
   * Emit a trigger event and call all registered callbacks.
   * @param event - The event name
   * @param args - Arguments to pass to the callbacks
   */
  emit: (event: string, ...args: any[]) => void

  /**
   * Remove a trigger event and all its callbacks.
   * @param event - The event name
   */
  remove: (event: string) => void

  /**
   * Remove a specific callback from an event.
   * @param event - The event name
   * @param callback - The callback to remove
   */
  off: (event: string, callback: (...args: any[]) => void) => void

  /**
   * Clear all triggers.
   */
  clear: () => void

  /**
   * List all registered trigger events.
   * @returns Array of event names
   */
  list: () => string[]
}

export const trigger: TriggersTool
