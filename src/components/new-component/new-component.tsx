import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'new-component',
  styleUrl: 'new-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() name: string;

  @Prop() age: number;

  private getText(): string {
    return "My name is " + this.name + " and I am  " + this.age + " old.";
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
