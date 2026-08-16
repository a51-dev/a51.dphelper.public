/// <reference path="../types/dphelper.d.ts" />
export interface BiometricTool {
  isAvailable: () => boolean
  getWebAuthnSupport: () => {
    supported: boolean
    platformAuthenticator: boolean
    hybridTransport: boolean
    uvToken: boolean
  }
  isSensorAvailable: (type: "fingerprint" | "face" | "iris") => Promise<boolean>
  register: (userId: string, rpId?: string, rpName?: string, userName?: string) => Promise<{ success: boolean; credentialId?: string; error?: string }>
  authenticate: (userId: string, rpId?: string, credentialId?: string) => Promise<{ success: boolean; error?: string }>
  getCredential: (credentialId: string) => PublicKeyCredentialDescriptor | undefined
  deleteCredential: (credentialId: string) => boolean
  listCredentials: () => string[]
}

export const biometric: BiometricTool
