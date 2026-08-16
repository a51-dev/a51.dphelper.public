/// <reference path="../types/dphelper.d.ts" />
export interface NavigationTool {
  load(url: string): Promise<void>
  ajax(): void
  ajax_running?: boolean
}

export const navigation: NavigationTool
