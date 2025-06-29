/*!
  dphelper
  Copyright (c) 2019 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

////////////////////
// Global object
////////////////////

/**
* @return dphelper Root.
*/
interface _dphelper {
  /**
   * Set parameter in dphelper
   * @param key Name of main function.
   * @return The values.
   */
  // [key: string]: any

  // _dphelper: any

  [_list: string]: any

  anchor: {
    toOnClick(el: string): void
  }

  array: {
    find(array: any[], key: any): any
    unique(array: any[]): any[]
    delete(array: any[], key: any): void
    merge(arrayA: any[], arrayB: any[]): any[]
    mergeByKey(arrayA: any[], arrayB: any[], key: string): any[]
    asc(array: any[]): any[]
    desc(array: any[]): any[]
    duplicates(array: any[]): any[]
    even(array: any[]): any[]
    odd(array: any[]): any[]
    toObj(array: any[]): object
    sumColumn(array: any[], column: number): number
    shuffle(array: any[]): any[]
    generate(num: number): any[]
    testArrayInt(array: any[]): number[]
    rand32(number: number): any
    findindex(array: any[], key: any): number
    pathToJson(array: any[], separator?: string): object
    deepClone(src: any): any
    match(arrayWords: any[], arrayToCheck: any[]): boolean
  }

  audio: {
    play: (url: string) => void
  }

  avoid: {
    cache: (uri: string) => string
  }

  browser: {
    state(state: any, title: any, url: any): void
    forw(times: number): void
    back(times: number): void
    reload(): void
    href(url: string): void
    offLine(text?: string): void
    zoom(): number
    status(code: number): string
  }

  check: {
    url: (url: string) => any
    version: (v1: string, v2: string, opts: any) => any
    npmVer: (npm: string) => any
  }

  color: {
    hex: (c: any) => string
    toHex: (rgb: any) => string
    toRGB: (c: any) => []
    oleColor: (c: any) => string
    gradient: (colorStart: any, colorEnd: any, colorCount: any) => any

  }

  console: {
    info(name: string, message: string, fn: Function): void
    stop(options?: string[]): void
    toHtml(el: string): void
  }

  cookie: {
    set: (pars: {
      name: any,
      value: any,
      time?: any,
      path?: "/",
      sameSite?: "Lax",
      secure?: "Secure" | "false"
    }) => any
    get: (name: string) => any
    delete: (name: string) => any
    removeAll: () => any
  }

  coords: {
    degreesToRadians: (degrees: any) => any
    latToMeters: (points: any) => any
    toVector: (points: any) => any
    convertToDecDegrees: (deg: any, minutes: any, sec: any, direction: any) => any
    distance: (point1: any, point2: any) => any
    polarToCartesian: (centerX: any, centerY: any, radius: any, angleInDegrees: any) => any
    mapDegreesToPixels: (degree: number, minDegree: number, maxDegree: number, minPixel: number, maxPixel: number, padding: number) => number
  }

  date: {
    days: (lang?: string) => string[]
    months: (lang?: string) => string[]
    year: () => number
    toIso: (value: any, int?: string) => string | null
    toMMDDYYYY: (value: any) => string
    toYYYYMMDD: (value: any) => string | undefined
    toHuman: (value: any) => string
    convert: (value: any, format: string[]) => string | null
    iso2Epoch: (value: any) => number
    localIsoTime: (value: any) => string
    utc: () => string
    parse: (value: any, separator?: string) => string | null
    addDays: (date: any, days: number) => Date
    dateTimeToString: (dateObject: any) => string
    isoToHuman: (value: any, symbol?: string) => string | null
    fullDate: () => string
    epoch: () => number
    diffInDays: (d1: any, d2: any) => number
    diffInWeeks: (d1: any, d2: any) => number
    diffInMonths: (d1: any, d2: any) => number
    diffInYears: (d1: any, d2: any) => number
    dateToYMD: (date: any) => string
    collection: (params: { date?: Date; type: string; locale?: string }) => string | undefined
    timeZones: () => string[]
  }

  disable: {
    select: (el?: string) => void
    spellCheck: (tmr?: number) => void
    rightClick: (el?: string) => void
    copy: (el?: string) => void
    paste: (el?: string) => void
    cut: (el?: string) => void
    drag: (el?: string) => void
  }

  dispatch: {
    set: (name: string, value?: any) => void
    listen: (name: string, cb?: (e: Event) => void, flag?: boolean) => void
    remove: (name: string) => void
  }

  element: {
    fitScale: (el: any, scale?: number, fit?: boolean) => void
    scaleBasedOnWindow: (elm: any, scale: number, fit: boolean) => void
  }

  events: {
    list: (el: Element) => any
    multi: (element: Element, eventNames: string, listener: EventListener) => void
    copy: (el: string) => void
    onDrag: (elem: string) => void
    keys: (e: KeyboardEvent) => { key: string; ctrl: boolean; alt: boolean; shift: boolean }
  }

  form: {
    serialize: (form: HTMLFormElement) => { [key: string]: any }
    confirmType: (type: string, value: any) => boolean
    required: (value: any) => string | undefined
    minLength: (value: any, num?: number) => string | undefined
    maxLength: (value: any, num?: number) => string | undefined
    maxPhoneNumber: (value: any, num?: number) => string | undefined
    isNumeric: (value: any) => boolean
    isEmail: (value: any) => boolean
    pattern: (e: Event) => void
    noSpecialChars: (e: Event) => void
    table: (size: [number, number], id: string, elem: HTMLElement) => void
    sanitize: (str: string) => string | undefined
  }

  format: {
    currency: (value: number, locale?: string, currency?: string) => string
    phoneNumber: (value: string, countryCode?: string) => string
  }

  imports: {
    file: (elem: string, file: string) => Promise<void>
  }

  json: {
    counter: (json: any, key?: string, val?: any) => number | null
    toCsv: (jsonInput: any) => string
    saveCsvAs: (csvData: string, fileName: string) => void
    is: (str: string) => boolean
    parse: (file: string) => any
    sanitize: (str: string) => string
    sanitizeJsonValue: (str: string) => string
  }

  load: {
    all: (context, cacheName?: string) => void
    file: (filePath: string) => Promise<string>
    fileToElement: (elementSelector: string, filePath: string) => Promise<void>
    json: (filePath: string) => Promise<any>
    remote: (path: string, method?: string, headers?: HeadersInit) => Promise<any>
    script: (scripts: string[], elementSelector?: string) => void
    toJson: (context, cacheName?: string) => void
  }

  logging: {
    list: {
      type: string
      message: string
    }
    reg: (txt: string) => void
    debug: (txt: string) => void
    error: (txt: string) => void
  }

  math: {
    rnd: () => number
    tmr: () => number
    add: (a: number, b: number) => number
    sub: (a: number, b: number) => number
    multi: (a: number, b: number) => number
    div: (a: number, b: number) => number
    rem: (a: number, b: number) => number
    exp: (a: number, b: number) => number
    isOdd: (a: number) => boolean
    float2int: (a: number) => number
    percent: (n: number, tot: number) => number
    isPrime: (n: number) => boolean
  }

  memory: {
    lock: (obj: string) => void
    unlock: (obj: string) => void
  }

  object: {
    toArray: (object: Record<string, any>) => [string, any][]
    replaceNullObjects: (data: Record<string, any>) => Record<string, any>
    serialize: (value: any) => any
    deSerialize: (valueNew: any) => any
    sort: (o: Record<string, any>) => Record<string, any>
    toXML: (obj: Record<string, any>) => string
    find: (array: any[], key: string, value: any) => any
    instance: (obj: any) => any
    updateByKey: (obj: Record<string, any>, key: string, newValue: any) => Record<string, any>
    findindex: (array: any[], key: string) => number
    parse: (val: any) => any
    isObject: (val: any) => boolean
    diff: (obj1: Record<string, any>, obj2: Record<string, any>) => Record<string, { obj1: any, obj2: any }>
    path: (prop: string, array: string[], separator?: string) => string
  }

  path: {
    rail: () => string[]
    hash: () => string[]
    query: (url: string) => Record<string, string>
  }

  promise: {
    check: (p: any) => boolean
    resolve: (data: any) => Promise<any>
  }

  sanitize: {
    html: (s: string) => string
  }

  screen: {
    fullScreen: (el: string) => void
    toggle: (el: string) => void
    info: () => {
      width: number
      height: number
      availWidth: number
      availHeight: number
      colorDepth: number
      pixelDepth: number
    }
  }

  scrollbar: {
    custom: (el: string, options: any) => void
    indicator: (props: any) => void
    position: {
      get: (el: any) => void
      set: (el: any) => void
    }
    smooth: (target: any, speed: any, smooth: any) => void
    scrollTo: (container: string, element: string, gap?: number) => void
  }

  security: {
    uuid: {
      byVal: (string: string) => string
      v4: string
      v5: string
    }
    hashPass: (u: string, p: string, t?: string) => Promise<string>
    crypt: (u: string, p: string, mode?: string) => string
    deCrypt: (u: string, p: string, mode?: string) => string
    AES_KeyGen: (passKey?: string) => string
    SHA256_Hex: (passKey: string) => string
  }

  shortcut: {
    keys: (e: any, trigger: any) => void
  }

  socket: {
    info: () => string
    start: (element: any, server: any, name: string) => void
    conn: (id: any, server: any, name: string) => void
    connect: (server: any, name: string) => void
    open: (id: any, server: any, name: string) => void
    send: (mex: any, type?: string) => void
    ping: (name: string) => void
    receive: (el?: any, name?: string) => void
    keepAlive: (name: string) => void
    check: () => void
    list: () => WebSocket[]
  }

  svg: {
    init: (container: HTMLElement, source1: [HTMLElement, string], source2: [HTMLElement, string], cb?: Function) => void
    check: () => boolean
    update: (rect1: HTMLElement, rect2: HTMLElement, cxn: HTMLElement) => void
    getCurve: (p1: [number, number], p2: [number, number], dx: number) => string
    getIntersection: (dx: number, dy: number, cx: number, cy: number, w: number, h: number) => [number, number]
    setConnector: (source: HTMLElement, side: string) => HTMLElement
    removeConnection: (container: HTMLElement) => void
    makeScrollable: (svgContainer: HTMLElement, scrollContainer: HTMLElement, elm1: HTMLElement, elm2: HTMLElement, rect1: HTMLElement, rect2: HTMLElement) => void
    makeDraggable: (evt: Event) => void
    toggle: (evt: Event, container: HTMLElement, source1: HTMLElement, source2: HTMLElement) => void
    convert: (options) => string | void
  }

  system: {
    multiSplit: () => any
  }

  text: {
    trim(s: string, c: string, b: number, e: number): string
    capitalize(txt: string): string
    lower(txt: string): string
    upper(txt: string): string
    nl2br(str: string): string
    sanitize(str: string): string
    camelCase: {
      toSpace(string: string): string
      toUnderscore(string: string): string
    }
    fitContainer(el: string): void
  }

  timer: {
    sleep(ms: number): Promise<void>
    percentage(start: string, end: string): string
  }

  tools: {
    getip(): Promise<void>
    byteSize(bytes: number): string
    zIndex(): number
    zeroToFalse(value: number): boolean | number
  }

  translators: {
    convertMatrixToScale(values: any): number
  }

  trigger: {
    click(elem: string): void
    change(elem: string): void
    input(elem: string): void
  }

  type: {
    of(p: any): string
    instOfObj(p: any): boolean
    isNull(p: any): (i: any) => boolean
    isBool(val: any): boolean
  }

  ui: null

  window: {
    enhancement(): void
    animationframe(): any
    center(params: { url: string; title: string; name: string; w: number; h: number }): void
    onBeforeUnLoad(e: any): void
    purge(d?: Document, time?: number): void
    stopZoomWheel(e: any): void
    setZoom(element?: string, zoom?: number): string
    getZoom(element?: string): number
  }

}

////////////////////////////////////////////////////////////////////////////

declare var dphelper: _dphelper
type dphelper = _dphelper

declare var arguments: any
type arguments = any

///////////////////

interface SubCommand {
  name: string
  version: string
  example: string
  author: string
  creationDate: string
  lastMod: string
  type: string
  active: boolean
  description: string
  subCommand: Array<SubCommand> | typeof Array
}

interface Description {
  name: string,
  active: boolean,
  subCommand: Array<SubCommand>,
}

declare function confirm(message: string, func1: Function, func2?: Function): boolean
