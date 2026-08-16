/// <reference path="../types/dphelper.d.ts" />
export interface Credits {
  name: string
  version: string
  description: string
  license: string
  author: {
    name: string
    email: string
  }
}

type CreditsTool = (props: Credits) => void

export const credits: CreditsTool
