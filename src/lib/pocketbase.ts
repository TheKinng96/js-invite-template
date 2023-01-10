import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://invitation.hangitup.today');

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log("auth info updated: ", auth)
  currentUser.set(pb.authStore.model)
})