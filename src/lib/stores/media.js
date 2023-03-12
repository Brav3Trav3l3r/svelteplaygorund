import {writable} from 'svelte/store'

export const currentTimeSec = writable(0)
export const isPlaying = writable(false)
export const savedVolume = writable(80)