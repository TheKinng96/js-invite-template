<script lang="ts">
  import {currentUser, pb} from './pocketbase'

  let username = '';
  let password = '';

  async function login() {
    await pb.collection('users').authWithPassword(username, password);
  }

  async function signup() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
        name: 'Test',
      }
      const createdUser = await pb.collection('users').create(data)
      await login();
    } catch (error) {
      console.log(error)
    }
  }

  function signout() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
  <p>Sign in as {$currentUser.username}</p>
{:else}
  <form on:submit|preventDefault>
    <input type="text" placeholder="username" bind:value={username} />
    <input type="text" placeholder="password" bind:value={password} />
    <button on:click={signup}>Sign Up</button>
    <button on:click={login}>Login</button>
  </form>
{/if}