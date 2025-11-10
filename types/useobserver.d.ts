/*!
  memorio
  Copyright (c) 2025 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
* useObserver run a callback anytime the associated state going to change
* @return Execution of function after state change.
*/
interface _useObserver {

  /**
  * Generate your useObserver
  *
  * @example
  * useObserver(Function, "state.myState")
  *
  * @since memorio 1.0.6
  */
  (func: Function, stateName: string): any


}

declare var useObserver: _useObserver
type useObserver = _useObserver
