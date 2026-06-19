// --- AUTO-GENERATED TOOL TYPES START ---
// --- ai ---
  interface AiTool {
    tokenCount: (data: any) => number
    smartSanitize: (text: string) => string
    toon: (data: any) => string
    toonToJson: (toon: string) => any
    chunker: (text: string, options?: { size?: number, overlap?: number }) => string[]
    similarity: (a: number[], b: number[]) => number
    extractReasoning: (text: string) => { reasoning: string, content: string }
    prompt: (template: string, vars: Record<string, any>) => string
    schema: (data: any) => string
    snapshot: () => string
  }

// --- anchor ---
  interface AnchorTool {
    /**
     * Converts anchor tags to onClick events
     * @param selector - CSS selector for target elements
     */
    toOnClick(selector: string): void
  }

// --- array ---
  interface ArrayTool {
    find<T>(array: T[], key: any): T | any
    unique<T>(array: T[]): T[]
    delete<T>(array: T[], key: keyof T): void
    merge<T>(arrayA: T[], arrayB: T[]): T[]
    mergeByKey<T extends Record<string, any>>(arrayA: T[], arrayB: T[], key: keyof T): T[]
    asc<T>(array: T[]): T[]
    desc<T>(array: T[]): T[]
    duplicates<T>(array: T[]): T[]
    even<T>(array: T[]): T[]
    odd<T>(array: T[]): T[]
    toObj<T>(array: T[]): Record<string, T>
    sumColumn(array: number[][], column: number): number
    shuffle<T>(array: T[]): T[]
    generate(num: number): number[]
    testArrayInt(array: unknown[]): number[]
    rand32(number: number): number
    findindex<T>(array: T[], key: any): number
    pathToJson(array: string[], separator?: string): Record<string, unknown>
    deepClone<T>(src: T): T
    match(arrayWords: string[], arrayToCheck: string[]): boolean
  }

// --- audio ---
  interface AudioTool {
    /**
     * Plays an audio file if it is not already playing.
     * If no file is specified, removes all audio elements from the document.
     *
     * @param file - The name of the audio file to play.
     * @param path - The path to the audio file.
     * @param loop - Whether the audio should loop.
     */
    play: (file?: string, path?: string, loop?: boolean) => void
  }

// --- avoid ---
  interface AvoidTool {
    cache: (uri: string) => string
  }

// --- biometric ---
  interface BiometricTool {
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

// --- browser ---
  interface BrowserTool {
    state(state: any, title: any, url: any): void
    forw(times: number): void
    back(times: number): void
    reload(): void
    href(url: string): void
    offLine(text?: string): void
    zoom(): number
    status(code: number): string
    interlock(onUpdate: (tabs: number) => void): void
  }

// --- check ---
  interface CheckTool {
    url: (url: string) => any
    version: (v1: string, v2: string, opts?: any) => any
    npmVer: (npm: string) => any
  }

// --- color ---
  interface ColorTool {
    hex: (c: any) => string
    toHex: (rgb: any) => string
    toRGB: (c: any) => number[]
    oleColor: (c: any) => string
    gradient: (colorStart: any, colorEnd: any, colorCount: any) => any
  }

// --- compress ---
  interface CompressTool {
    gzip: (data: string | Uint8Array) => Promise<Blob>
    gunzip: (blob: Blob) => Promise<string>
    deflate: (data: string | Uint8Array) => Promise<Blob>
    inflate: (blob: Blob) => Promise<string>
    compress: (data: string) => string
    decompress: (data: string) => string
    base64Encode: (data: string) => string
    base64Decode: (data: string) => string
    urlEncode: (data: string) => string
    urlDecode: (data: string) => string
    htmlEncode: (data: string) => string
    htmlDecode: (data: string) => string
  }

// --- cookie ---
  interface CookieTool {
    set: (pars: {
      name: any,
      value: any,
      time?: any,
      path?: string,
      sameSite?: string,
      secure?: string
    }) => any
    get: (name: string) => any
    delete: (name: string) => any
    removeAll: () => any
  }

// --- coords ---
  interface CoordsTool {
    degreesToRadians: (degrees: any) => any
    latToMeters: (points: any) => any
    toVector: (points: any) => any
    convertToDecDegrees: (deg: any, minutes: any, sec: any, direction: any) => any
    distance: (point1: any, point2: any) => any
    polarToCartesian: (centerX: any, centerY: any, radius: any, angleInDegrees: any) => any
    mapDegreesToPixels: (degree: number, minDegree: number, maxDegree: number, minPixel: number, maxPixel: number, padding: number) => number
  }

// --- credits ---
  interface Credits {
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

// --- date ---
  interface DateTool {
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

// --- disable ---
  interface DisableTool {
    select: (el?: string) => void
    spellCheck: (tmr?: number) => void
    rightClick: (el?: string) => void
    copy: (el?: string) => void
    paste: (el?: string) => void
    cut: (el?: string) => void
    drag: (el?: string) => void
  }

// --- dispatch ---
  interface DispatchTool {
    set: (name: string, value?: any) => void
    listen: (name: string, cb?: (e: Event) => void, flag?: boolean) => void
    remove: (name: string) => void
  }

// --- elements ---
  interface ElementsTool {
    fitScale: (el: any, scale?: number, fit?: boolean) => void
    scaleBasedOnWindow: (elm: any, scale: number, fit: boolean) => void
  }

// --- events ---
  interface EventsTool {
    list: (el: Element) => any
    multi: (element: Element, eventNames: string, listener: EventListener) => void
    copy: (el: string) => void
    onDrag: (elem: string) => void
    keys: (e: KeyboardEvent) => { key: string; ctrl: boolean; alt: boolean; shift: boolean }
  }

// --- fetch ---
  interface FetchTool {
    /**
     * Perform a resilient fetch with automatic retries and exponential backoff.
     */
    (url: string, options?: any, retries?: number, backoff?: number): Promise<Response>
  
    /**
     * Perform a GET request.
     */
    get: (url: string, options?: any) => Promise<Response>
  
    /**
     * Perform a POST request with optional JSON body auto-serialization.
     */
    post: (url: string, body: any, options?: any) => Promise<Response>
  }

// --- form ---
  interface FormTool {
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

// --- format ---
  interface FormatTool {
    currency: (value: number, locale?: string, currency?: string) => string
    phoneNumber: (value: string, countryCode?: string) => string
  }

// --- i18n ---
  interface I18nTool {
    setLocale: (locale: string) => void
    getLocale: () => string
    addTranslations: (locale: string, strings: Record<string, string>) => void
    t: (key: string, vars?: Record<string, any>) => string
    pluralize: (count: number, options: { zero?: string; one?: string; two?: string; few?: string; many?: string; other?: string }, locale?: string) => string
    number: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string
    date: (value: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions) => string
    relativeTime: (timestamp: number | Date, locale?: string) => string
    list: (items: string[], locale?: string, options?: Intl.ListFormatOptions) => string
    getSupportedLocales: () => string[]
  }

// --- image ---
  interface ImageTool {
    resize: (img: HTMLImageElement, width: number, height: number, quality?: "pixelated" | "auto") => string
    crop: (img: HTMLImageElement, region: { x: number; y: number; width: number; height: number }) => string
    toDataURL: (img: HTMLImageElement | HTMLCanvasElement, format?: string, quality?: number) => string
    fromDataURL: (dataURL: string) => Promise<HTMLImageElement>
    filter: (img: HTMLImageElement, options: { brightness?: number; contrast?: number; saturate?: number; hueRotate?: number; invert?: number; sepia?: number; blur?: number; grayscale?: number }) => string
    rotate: (img: HTMLImageElement, degrees: number) => string
    flip: (img: HTMLImageElement, direction: "horizontal" | "vertical") => string
    grayscale: (img: HTMLImageElement) => string
    blur: (img: HTMLImageElement, radius: number) => string
    getDimensions: (img: HTMLImageElement | HTMLCanvasElement) => { width: number; height: number }
    load: (src: string) => Promise<HTMLImageElement>
    composite: (img1: HTMLImageElement, img2: HTMLImageElement, mode?: "source-over" | "multiply" | "screen" | "overlay" | "darken" | "lighten", x?: number, y?: number) => string
  }

// --- json ---
  interface JsonTool {
    counter: (json: any, key?: string, val?: any) => number | null
    toCsv: (jsonInput: any) => string
    saveCsvAs: (csvData: string, fileName: string) => void
    is: (str: string) => boolean
    parse: (file: string) => any
    sanitize: (str: string) => string
    sanitizeJsonValue: (str: string) => string
  }

// --- load ---
  interface LoadTool {
    all: (context: any, cacheName?: string) => void
    file: (filePath: string) => Promise<string>
    fileToElement: (elementSelector: string, filePath: string) => Promise<void>
    json: (filePath: string) => Promise<any>
    remote: (path: string, method?: string, headers?: HeadersInit) => Promise<any>
    script: (scripts: string[], elementSelector?: string) => void
    toJson: (context: any, cacheName?: string) => void
  }

// --- logging ---
  interface LoggingTool {
    list: {
      type: string
      message: string
    }[]
    reg: (txt: string) => void
    debug: (txt: string) => void
    error: (txt: string) => void
  }

// --- math ---
  interface MathTool {
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

// --- memory ---
  interface MemoryTool {
    lock: (obj: string) => void
    unlock: (obj: string) => void
  }

// --- navigation ---
  interface NavigationTool {
    load(url: string): Promise<void>
    ajax(): void
    ajax_running?: boolean
  }

// --- net ---
  interface NetTool {
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

// --- objects ---
  interface ObjectsTool {
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

// --- path ---
  interface PathTool {
    rail: () => string[]
    hash: () => string[]
    query: (url: string) => Record<string, string>
  }

// --- promise ---
  interface PromiseTool {
    check: (p: any) => boolean
    resolve: (data: any) => Promise<any>
  }

// --- sanitize ---
  interface SanitizeTool {
    html: (s: string) => string
  }

// --- screen ---
  interface ScreenTool {
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

// --- scrollbar ---
  interface ScrollbarTool {
    custom: (el: string, options: any) => void
    indicator: (props: any) => void
    position: {
      get: (el: any) => void
      set: (el: any) => void
    }
    smooth: (target: any, speed: any, smooth: any) => void
    scrollTo: (container: string, element: string, gap?: number) => void
  }

// --- security ---
  interface SecurityTool {
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
    ulid: () => string
    fingerprint: () => string
    saveEncrypted: (key: string, value: string, secret: string) => void
    getEncrypted: (key: string, secret: string) => string | null
  }

// --- shortcut ---
  interface ShortcutTool {
    keys: (e: any, trigger: any) => void
  }

// --- socket ---
  interface SocketTool {
    info: () => string
    start: (server: any, name: string) => void
    conn: (id: any, server: any, name: string) => void
    connect: (server: any, name: string) => void
    open: (id: any, server: any, name: string) => void
    ping: (name: string) => void
    send: (mex: any, name: string) => void
    receive: (func: Function, name: string) => void
    keepAlive: (name: string) => void
    check: () => void
    list: () => WebSocket[]
    close: (name: string) => void
  }

// --- sse ---
  interface SseTool {
    /**
     * Opens an SSE connection with support for custom fetch options (POST, Headers, etc).
     */
    open(url: string, options?: any): {
      on(event: "message" | "error" | "open", cb: (data: any) => void): void
      close(): void
    }
  }

// --- svg ---
  interface SvgTool {
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
    convert: (options: any) => string | void
  }

// --- sync ---
  interface SyncTool {
    /**
     * Synchronize data between tabs using BroadcastChannel.
     */
    tab: (channelName: string, callback: (data: any) => void) => { post: (data: any) => void, close: () => void }
    /**
     * Create a Proxy object linked to localStorage for auto-sync with optional encryption.
     */
    storageProxy: <T extends object>(key: string, initialValue: T, secret?: string) => T
    /**
     * Low-latency cross-tab event bus.
     */
    pulse: (channelName: string, callback: (data: any) => void) => { emit: (data: any) => void, stop: () => void }
  }

// --- system ---
  interface SystemTool {
    multiSplit: () => any
  }

// --- text ---
  interface TextTool {
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

// --- timer ---
  interface TimerTool {
    sleep(ms: number): Promise<void>
    percentage(start: string, end: string): string
  }

// --- tools ---
  interface ToolsTool {
    getip(): Promise<void>
    byteSize(bytes: number): string
    zIndex(): number
    zeroToFalse(value: number): boolean | number
  }

// --- translators ---
  interface TranslatorsTool {
    convertMatrixToScale(values: any): number
  }

// --- triggers ---
  interface TriggersTool {
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

// --- types ---
  interface TypesTool {
    of(p: any): string
    instOfObj(p: any): boolean
    isNull(p: any): (p: any) => boolean
    isBool(val: any): boolean
  }

// --- ui ---
  interface UiTool {
    anchorContext(): void
    [key: string]: any
  }

// --- window ---
  interface WindowTool {
    enhancement(): void
    animationframe(): any
    center(params: { url: string; title: string; name: string; w: number; h: number }): void
    onBeforeUnLoad(e: any): void
    purge(d?: Document, time?: number): void
    stopZoomWheel(e: any): void
    setZoom(element?: string, zoom?: number): string
    getZoom(element?: string): number
  }

// --- worker ---
  interface WorkerPool {
    workers: Worker[]
    busy: Set<Worker>
    queue: Array<{ task: any, resolve: Function, reject: Function }>
    size: number
  }
  
  interface WorkerTool {
    create: (src: string, options?: { onmessage?: (e: MessageEvent) => void; onerror?: (e: ErrorEvent) => void }) => Worker
    createInline: (code: string, options?: { onmessage?: (e: MessageEvent) => void; onerror?: (e: ErrorEvent) => void }) => Worker
    post: (worker: Worker, message: any, transferables?: Transferable[]) => void
    terminate: (worker: Worker) => void
    pool: (src: string, size?: number) => WorkerPool
    poolExec: (pool: WorkerPool, tasks: any[]) => Promise<any[]>
    importScripts: (worker: Worker, scripts: string[]) => void
    shared: (src: string, options?: { name?: string; onconnect?: (e: MessageEvent) => void; onmessage?: (e: MessageEvent) => void }) => SharedWorker
  }
// --- AUTO-GENERATED TOOL TYPES END ---

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
  env?: "client" | "server" | "both"
  subCommand: SubCommand[]
}

interface Description {
  name: string
  active: boolean
  subCommand: SubCommand[]
}

interface _dphelper {
  [key: string]: any

  // --- AUTO-GENERATED TOOL MEMBERS START ---
  readonly ai: AiTool
  readonly anchor: AnchorTool
  readonly array: ArrayTool
  readonly audio: AudioTool
  readonly avoid: AvoidTool
  readonly biometric: BiometricTool
  readonly browser: BrowserTool
  readonly check: CheckTool
  readonly color: ColorTool
  readonly compress: CompressTool
  readonly cookie: CookieTool
  readonly coords: CoordsTool
  readonly credits: CreditsTool
  readonly date: DateTool
  readonly disable: DisableTool
  readonly dispatch: DispatchTool
  readonly element: ElementsTool
  readonly events: EventsTool
  readonly fetch: FetchTool
  readonly form: FormTool
  readonly format: FormatTool
  readonly i18n: I18nTool
  readonly image: ImageTool
  readonly json: JsonTool
  readonly load: LoadTool
  readonly logging: LoggingTool
  readonly math: MathTool
  readonly memory: MemoryTool
  readonly navigation: NavigationTool
  readonly net: NetTool
  readonly object: ObjectsTool
  readonly path: PathTool
  readonly promise: PromiseTool
  readonly sanitize: SanitizeTool
  readonly screen: ScreenTool
  readonly scrollbar: ScrollbarTool
  readonly security: SecurityTool
  readonly shortcut: ShortcutTool
  readonly socket: SocketTool
  readonly sse: SseTool
  readonly svg: SvgTool
  readonly sync: SyncTool
  readonly system: SystemTool
  readonly text: TextTool
  readonly timer: TimerTool
  readonly tools: ToolsTool
  readonly translators: TranslatorsTool
  readonly trigger: TriggersTool
  readonly type: TypesTool
  readonly ui: UiTool
  readonly window: WindowTool
  readonly worker: WorkerTool
    // --- AUTO-GENERATED TOOL MEMBERS END ---

  //   setDescription: (description: Description, newObj: any) => void
  //   setProps: (root: any, desc: any, options?: any) => void
  //   _list: {
  //     scripts: Description[]
  //     sockets: any[]
  //     [key: string]: any
  //   }

  version: string
  isServer: boolean
  isBrowser: boolean

}

interface Window {
  [key: string]: any
  dphelper: _dphelper
}

interface globalThis {
  [key: string]: any
}

declare function confirm(message: string, func1: Function, func2?: Function): boolean

declare var dphelper: _dphelper
type dphelper = _dphelper
