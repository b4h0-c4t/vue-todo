<template>
  <li class="list">
    <div class="listHeader">
      <h2 class="taskName">{{task.name}}</h2>
      <p class="limit">{{task.limit}}</p>
    </div>
    <p class="taskDisc">{{task.desc}}</p>
  </li>
</template>

<script>
export default {
  name: 'list',
  props: ['task']
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
