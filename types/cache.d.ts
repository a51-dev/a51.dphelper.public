/*!
  dphelper
  Copyright (c) 2019 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
* Cache is used for internal use only... but you can use if you need.
* @return Some stuff you cache... usually used for dynamic imports from dphelper.
*/

interface _cache {

  /**
  * Create a cache, please use state instead!
  *
  * @example
  * cache.myCache = any
  *
  * @since dphelper 1.0.6
  */
  [key: string]: any
}

declare var cache: _cache
type cache = _cache
