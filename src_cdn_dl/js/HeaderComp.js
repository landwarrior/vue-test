export default {
  props: {
    headertitle: String,
    menu1: String,
    menu2: String,
    menu3: String,
  },
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child');
  },
  template: `
  <header>
    <div class="navbar-fixed">
      <nav class="teal">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">{{ headertitle || 'TEST' }}</a>
          <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">{{ menu1 || 'Test1' }}</a></li>
            <li><a href="badges.html">{{ menu2 || 'Test2' }}</a></li>
            <li><a href="collapsible.html">{{ menu3 || 'Test3' }}</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-menu">
      <li><a href="sass.html">{{ menu1 || 'Test1' }}</a></li>
      <li><a href="badges.html">{{ menu2 || 'Test2' }}</a></li>
      <li><a href="collapsible.html">{{ menu3 || 'Test3' }}</a></li>
    </ul>
  </header>
  `
}
