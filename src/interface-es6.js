import { render, Component, linkEvent } from 'inferno';

class Button extends Component {
  constructor(props) {
    super(props);
    let self = this;

    self.direction = props.direction;

    function event(press){
      if(self.direction.includes("L")) gm.input.left(press);
      if(self.direction.includes("U")) gm.input.up(press);
      if(self.direction.includes("R")) gm.input.right(press);
      if(self.direction.includes("D")) gm.input.down(press);
    }
    self.press = function(){event(true)};
    self.release = function(){event(false)};
  }
  render() {
    return (
      <button onmousedown={linkEvent(this, this.press)} onmouseup={linkEvent(this, this.release)}>
        {this.direction}
      </button>
    );
  }
}

render(
  <div>
    <Button direction="LU"></Button>
    <Button direction="U"></Button>
    <Button direction="RU"></Button>
    <Button direction="L"></Button>
    <Button direction="__"></Button>
    <Button direction="R"></Button>
    <Button direction="DL"></Button>
    <Button direction="D"></Button>
    <Button direction="DR"></Button>
  </div>,
  document.getElementById("interface")
);
