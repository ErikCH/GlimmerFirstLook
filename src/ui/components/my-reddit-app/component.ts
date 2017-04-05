import Component, {tracked} from "@glimmer/component";

export default class MyRedditApp extends Component {
  title='Welcome to my Reddit List App';
  @tracked titles = [];
  @tracked addItem;

  constructor(options) {
    super(options);
    this.loadTitle();
  };

  add() {
    this.titles= [
     ...this.titles,
     {data:{title:this.addItem},
   ]
  };

    onKeyUp(event) {
      this.addItem=event.target.value;

    };

  delete() {
      this.titles.pop();
      this.titles = this.titles;
  }
  async loadTitle() {
    let response = await fetch('https://www.reddit.com/r/webdev.json');
    let json = await response.json();
    this.titles = json.data.children;

  };

}
