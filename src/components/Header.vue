<template>
  <div class="header">
    <button class="menuBtn" type="button" name="addTasks"></button>
    <h1 class="title">{{title}}</h1>
    <button class="plusBtn" type="button" name="addTasks"></button>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: 'Vue ToDo App'
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  display: block;
  content: "";
  width: 24px;
  height: 24px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fd6;
  padding: 5px;
}
.title {
  font-size: 24px;
}
.menuBtn {
  background: url(../assets/icon_menu.png) center/contain no-repeat;
}
.plusBtn {
  background: url(../assets/icon_plus.png) center/contain no-repeat;
}
</style>
