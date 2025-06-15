/*!
  dphelper
  Copyright (c) 2019 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

declare var $: any
declare var jQuery: any
declare module 'jquery'

// ////////////////////////////////////////////////////////////////

interface window {
  $: any
  jQuery: any
}

type $ = {}
type jQuery = {}
