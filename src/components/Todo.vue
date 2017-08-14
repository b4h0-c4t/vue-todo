<template>
  <div class="todo">
    <Header></Header>
    <ul class="tasks" v-if="listView">
      <template v-for="item in tasks">
        <List v-bind:task="item"></List>
      </template>
    </ul>
    <Input v-else></Input>
  </div>
</template>

<script>
import Header from '@/components/Header';
import List from '@/components/List';
import Input from '@/components/Input';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'todo',
  computed: mapGetters('Todo', {
    'listView': 'getListView',
    'tasks': 'getTasks'
  }),
  components: {
    Header,
    List,
    Input
  }
};
</script>
