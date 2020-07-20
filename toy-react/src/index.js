import { ToyReact,Component } from './ToyReact'

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
        </div>
    }
}

const app = <MyCompoment name="hello" id="ida">
    <div>this is content</div>
</MyCompoment>

ToyReact.render(app, document.getElementById('root'))