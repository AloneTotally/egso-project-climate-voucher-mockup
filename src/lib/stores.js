import { writable } from 'svelte/store';

export const sum = writable(0);
export const selected = writable([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
export const redeemed = writable(false);