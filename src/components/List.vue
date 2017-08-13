<template>
  <li class="list">
    <div class="listHeader">
      <h2 class="taskName">{{name}}</h2>
      <date class="limit">{{limit}}</date>
    </div>
    <p class="taskDisc">{{discription}}</p>
  </li>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      name: 'Task Name',
      discription: 'this is task.'
    }
  }
};
</script>

<style scoped>
.list {
  padding: 5px 10px;
  width: calc(100% - 20px);
  transition: 2s;
  border-bottom: dashed 1px #ccc;
}
.list:hover {
  background-color: #eee;
}

.listHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.taskName {
  display: block;
  font-size: 20px;
}
.limit {
  display: block;
  font-size: 16px;
}
.taskDisc {
  padding-left: 5px;
  text-align: left;
}
</style>
