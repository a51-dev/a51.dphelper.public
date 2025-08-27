/*!
  memorio
  Copyright (c) 2025 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
 * Create states using: session.set("example",{test:"test"})
*/
interface _session {

  /**
    * Create a new session
    *
    * @example
    * session.set("test","example") // or Array, Object, Number, Functions...
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the session.
    * @param param The information taht you want to session (Any).
    * @return boolean
  */
  set: (name: string, value: any) => void

  /**
    * Have back the data from a session.
    *
    * @example
    * session.get("test")
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the session.
  */
  get: (name: string) => any

  /**
    * Delete an existing session:
    *
    * @example
    * session.delete("test")
    * session.remove("test")
    *
    * @since memorio 0.0.1
    * @param name The String as name to define the session.
    * @return boolean
  */
  delete: (name: string) => boolean | undefined
  remove: (name: string) => boolean | undefined

  /**
    * Delete all storages
    *
    * @example
    * session.clearAll()
    * session.removeAll()
    *
    * @since memorio 0.0.1
    * @return boolean
  */
  clearAll: () => boolean
  removeAll: () => boolean

}

declare var session: _session
type session = _session
