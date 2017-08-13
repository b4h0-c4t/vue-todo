<template>
  <div class="todo">
    <Header></Header>
    <ul class="tasks" v-if="listView" v-for="item in tasks">
      <List></List>
    </ul>
    <Input v-else></Input>
  </div>
</template>

<script>
import Header from '@/components/Header';
import List from '@/components/List';
import Input from '@/components/Input';
export default {
  name: 'todo',
  data () {
    return {
      msg: 'this is ToDo App',
      listView: true,
      tasks: [
        {msg: 'aaa'},
        {msg: 'bbb'},
        {msg: 'ccc'}
      ]
    }
  },
  components: {
    Header,
    List,
    Input
  }
};
</script>
