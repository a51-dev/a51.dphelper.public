/*!
  memorio
  Copyright (c) 2025 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
* If you use only "state" you get the entire Proxy object
* @return Proxy Object of all states.
*/
interface _state {

  /**
   * Create states using: state.test = "example"
   *
   * @example
   * state.myStuff = any
   *
   * @since memorio 0.0.1
   * @param key The name of the state for which you want to modify the action.
   * @return The previous values (Any).
   * Important: Object is a Proxy.
   */
  [key: string]: any

  /**
   * Delete entire state using: state.remove("test")
   *
   * @example
   * state.remove(stateName)
   *
   * @since memorio 0.0.1
   * @param stateName The name of the state for which you want to delete.
   * @return boolean.
   */
  readonly remove?: (stateName: string) => any

  /**
   * List all states using: state.list
   *
   * @example
   * state.removeAll()
   *
   * @since memorio 1.8.92
   * @return Remove all states.
   */
  readonly removeAll?: () => any

  /**
   * List all states using: state.list
   *
   * @example
   * state.list
   *
   * @since memorio 0.0.1
   * @return Object of all states (Not the Proxy).
   */
  readonly list?: (stateName: string) => any

  /**
  * Generate a message for "memorio"
  * Note: FOR INTERNAL USE ONLY.
  * @since memorio 0.0.1
  */
  readonly mex?: any

}

declare var state: _state
type state = _state
