import ChildComp from './ChildComp.js';
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener("DOMContentLoaded", () => {
  let id = 1;
  Vue.createApp({
    data() {
      // マウント対象で使用するプロパティを定義する
      return {
        title: "Hello, World!",
        titleClass: 'title',
        text: '',
        counter: {
          count: 0,
        },
        newTodo: '',
        hideCompleted: false,
        todos: [],
        todoId: 1,
        todoData: null,
      };
    },
    computed: {
      // data で用意したプロパティに条件を加えて使用したい場合に関数を定義すると、その名称でプロパティのようにアクセスできる
      filteredTodos() {
        return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos;
      }
    },
    methods: {
      // マウントする対象で使える各種メソッドを定義する
      increment() {
        this.counter.count++;
      },
      addTodo() {
        this.todos.push({ id: id++, text: this.newTodo, done: false });
        this.newTodo = '';
      },
      removeTodo(todo) {
        this.todos = this.todos.filter((t) => t !== todo);
      },
      async fetchData() {
        this.todoData = null;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
        this.todoData = await res.json();
      }
    },
    mounted() {
      // マウントされたら実行される
      this.$refs.pElementRef.textContent = 'mounted!';
      this.fetchData();
    },
    watch: {
      // todoId の値に変更があると実行される
      todoId() {
        this.fetchData();
      }
    },
  }).mount("#app");

  Vue.createApp({
    data() {
      // コンポーネントで使用するプロパティと、ここで使用するプロパティを定義する
      return {
        todos: null,
        todoId: null,
      }
    },
    methods: {
      // メソッドを定義する
      async fetchData() {
        this.todos = null;
        if (!this.todoId) {
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
          this.todos = await res.json();
        } else {
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
          if (res.ok) {
            this.todos = [];
            this.todos.push(await res.json());
          } else {
            this.todos = [];
          }
        }
      }
    },
    watch: {
      todoId() {
        // todoId に変更があったらメソッドを実行する
        this.fetchData();
      }
    },
    mounted() {
      // マウントされたら（初期表示時に）メソッドを実行する
      this.fetchData();
    },
    // 使用するコンポーネントを指定する
    components: {
      ChildComp
    },
  }).mount('#app2');

  Vue.createApp({
    components: {
      FooterComp
    },
  }).mount('#footer');

  Vue.createApp({
    data() {
      return {
        title: 'こんにちは、世界',
        menu1: 'hoge1',
        menu2: 'hoge2',
        menu3: 'hoge3',
        childMsg: 'No child msg yet',
      };
    },
    components: {
      HeaderComp
    }
  }).mount('#header');
  M.AutoInit();
});
