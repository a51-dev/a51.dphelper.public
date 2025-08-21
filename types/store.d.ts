/*!
  memorio
  Copyright (c) 2025 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
 * Create states using: store.set("example",{test:"test"})
*/
interface _store {

  /**
    * Create a new store
    *
    * @example
    * store.set("test","example") // or Array, Object, Number, Functions...
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the store.
    * @param param The information taht you want to store (Any).
    * @return boolean
  */
  set: (name: string, value: any) => void

  /**
    * Have back the data from a store.
    *
    * @example
    * store.get("test")
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the store.
  */
  get: (name: string) => any

  /**
    * Delete an existing store:
    *
    * @example
    * store.delete("test")
    * store.remove("test")
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the store.
    * @return boolean
  */
  delete: (name: string) => boolean | undefined
  remove: (name: string) => boolean | undefined

  /**
    * Delete all storages
    *
    * @example
    * store.clearAll()
    * store.removeAll()
    *
    * @since memorio 0.0.1
    * @return boolean
  */
  clearAll: () => boolean
  removeAll: () => boolean

  /**
    * Know how much space you have for total storages
    *
    * @example
    * store.quota()
    *
    * @since memorio 0.0.1
    * @return values
  */
  quota: () => void

  /**
    * Get the size of stores an the total
    *
    * @example
    * store.size()
    *
    * @since memorio 0.0.1
    * @return dimension in kb
  */
  size: () => number

  // TODO
  // readonly increaseQuota: (value: number) => void
}

declare var store: _store
type store = _store
