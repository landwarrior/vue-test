// module として扱う
export default {
  // props に、このコンポーネントで使用するプロパティを定義する
  props: {
    todos: Array,
  },
  // props で定義したプロパティを使用してレンダリングする
  template: `
  <table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>completed</th>
    </tr>
    <tr v-if="todos && todos.length > 0" v-for="todo in todos" :key="todo.id">
      <td>{{ todo.userId }}</td>
      <td>{{ todo.id }}</td>
      <td>{{ todo.title }}</td>
      <td>{{ todo.completed }}</td>
    </tr>
    <tr v-else-if="todos && todos.length == 0">
      <td colspan="4">No Data</td>
    </tr>
    <tr v-else>
      <td colspan="4">Loaging...</td>
    </tr>
  </table>
  `
}
