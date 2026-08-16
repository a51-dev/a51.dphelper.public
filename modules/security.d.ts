/// <reference path="../types/dphelper.d.ts" />
export interface SecurityTool {
  uuid: {
    byVal: (string: string) => string
    v4: string
    v5: string
  }
  hashPass: (u: string, p: string) => Promise<string>
  crypt: (u: string, p: string) => Promise<string>
  deCrypt: (u: string, p: string) => Promise<string>
  AES_KeyGen: (passKey?: string) => Promise<string>
  SHA256_Hex: (passKey: string) => Promise<string>
  ulid: () => string
  fingerprint: (options?: { requireConsent?: boolean; consent?: boolean }) => Promise<string>
  saveEncrypted: (key: string, value: string, secret: string) => Promise<void>
  getEncrypted: (key: string, secret: string) => Promise<string | null>
}

export const security: SecurityTool
