<template>
  <div class="input">
    <div class="data">
      <label class="label" for="name">Task Name</label>
      <input class="textBox" type="text" name="name" value="" placeholder="Task Name">
    </div>
    <div class="data">
      <label class="label" for="limit">Task Limit</label>
      <input class="textBox" type="text" name="limit" value="" placeholder="Task Limit">
    </div>
    <div class="data_large">
      <label class="label" for="description">Task Description</label>
      <input class="textBox" type="text" name="description" value="" placeholder="Task Description">
    </div>
    <button class="addBtn" type="button" name="addbtn">追加</button>
  </div>
</template>

<script>
export default {
  name: 'input',
  data () {
    return {
      name: 'Task Name',
      discription: 'this is task.'
    }
  }
};
</script>

<style scoped>
.input {
  padding: 10px 5px;
  width: calc(100% - 10px);
}
.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.data .label {
  display: block;
  width: 30%;
  text-align: left;
}
.data .textBox {
  display: block;
  padding: 5px 0 5px 5px;
  width: calc(70% - 5px);
  text-align: left;
}
.data_large {
  display: block;
}
.data_large .label {
  display: block;
  margin-top: 15px;
  width: 100%;
  text-align: left;
}
.data_large .textBox {
  display: block;
  padding: 5px 0 5px 5px;
  width: calc(100% - 10px);
  text-align: left;
}
.addBtn {
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  display: block;
  margin: 20px auto 0;
  padding: 10px 15px;
  transition: 1s;
  background-color: #ddd;
}
.addBtn:hover {
  background-color: #fefefe;
}
</style>
