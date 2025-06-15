/*!
  dphelper
  Copyright (c) 2019 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

/**
* Observer run a callback anytime the associated state going to change
* @return Execution of function after state change.
*/
interface _observer {

  /**
  * Generate your observer
  *
  * @example
  * observer("myState", Function)
  *
  * @since dphelper 1.0.6
  */
  (stateName: string, callBack: any): any

  /**
  * List of active observers
  *
  * @example
  * observer.list()
  *
  * @since dphelper 1.0.6
  */
  readonly list?: () => void

  /**
  * Remove the active observer (not the state)
  *
  * @example
  * observer.remove("myState")
  *
  * @since dphelper 1.0.6
  */
  readonly remove?: (name: string, callBack?: any, flag?: boolean) => void

}

declare var observer: _observer
type observer = _observer
