
declare module 'memorio' {
  const resource: { [key: string]: any }
  export = resource
}

interface _memorio {
  setProps: any,
  obj: any,
  array: any,
  dispatch: any,
  setDescription: any
}

type memorio = _memorio
declare var memorio: any

type arguments = any
declare var arguments: any

global.memorio = global.memorio
  ? global.memorio
  : globalThis.memorio
