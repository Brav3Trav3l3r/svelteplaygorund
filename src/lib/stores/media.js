import {writable} from 'svelte/store'

import { browser } from "$app/environment"

export const isDubbed = writable(browser && localStorage.getItem("isDubbed") || "false")
isDubbed.subscribe((val) => { browser && (localStorage.isDubbed = val)})

export const provider = writable(browser && localStorage.getItem("provider") || "gogo")
provider.subscribe((val) => { browser && (localStorage.provider = val)})

export const currentEp = writable(browser && sessionStorage.getItem("current_ep") || " ")
currentEp.subscribe((val) => { browser && (sessionStorage.currentEp = val)})



export const currentTimeSec = writable(0)
export const isPlaying = writable(false)
export const savedVolume = writable(80)
