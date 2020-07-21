import { ToyReact, Component } from './ToyReact'

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
      return (
        <button className="square" onClick={() => this.setState({ value: 'x' })}>
          {/* {this.props.value} */}
          {this.state.value ? this.state.value : ''}
        </button>
      );
    }
}

class Board extends Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}

class MyCompoment extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>world!</span>
            <span>!</span>
            <div>
                {true}
                {this.children}
            </div>
            <Board/>
        </div>
    }
}

const app = <MyCompoment name="hello" id="ida">
    <div>this is content</div>
</MyCompoment>

ToyReact.render(<Board/>, document.getElementById('root'))