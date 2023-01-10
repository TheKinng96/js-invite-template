<script lang="ts">
  import {onMount, onDestroy} from 'svelte'
  import {currentUser, pb} from './pocketbase'

  let messages = [];
  let newMessage = '';
  let unsubscribe: () => void;

  onMount(async () => {
    // Get message list
    const resultList = await pb.collection('messages').getList(1, 50, {
      sort: 'created',
      expand: 'user'
    });
    messages = resultList.items
  })

  async function sendMessage() {
    const data = {
      text: newMessage,
      user: $currentUser.id
    }

    const createdMessage = await pb.collection('messages').create(data);

    // Subscribed to realtime message
    unsubscribe = await pb.collection('message')
      .subscribe('*', async ({action, record}) => {
        if (action === 'create') {
          const user = await pb.collection('users').getOne(record.user);
          record.expand = {user};
          messages = [...messages, record]
        }

        if (action === 'delete') {
          messages = messages.filter((message) => message.id !== record.id)
        }
    })

    onDestroy(() => {
      unsubscribe?.();
    })
  }
</script>

<div class="messages">
  {#each messages as message (message.id)}
    <div class="msg">
      <img class="avatar" src={`https://avatars.dicebear.com/api/identicon/${message.expand?.user?.username}.svg`} alt="avatar" width="40px">

      <div>
        <small>
          Sent by @{message.expand?.user?.username}
        </small>
        <p class="msg-text">{message.text}</p>
      </div>
    </div>
  {/each}
</div>

<form on:submit|preventDefault={sendMessage}>
  <input type="text" placeholder="new message" bind:value={newMessage}>
  <button type="submit">Send</button>
</form>
