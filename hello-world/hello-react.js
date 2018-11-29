
//const h1Tag = document.createElement('h1');
//h1Tag.textContent = 'hello world from js';


// <h1><span>Hello world in span</span></h1>

// const h1Tag = React.createElement('div', null, 
//     React.createElement('h1', null, 
//     React.createElement('span', null, 'Hello world in span')));

// JSX

// JS XML
// syntax of html in our js
// translate this html to React.createElement
// browsers do not understand jsx
// we need to translate jsx before giving it to the browser
// babel will help us translate jsx to React.createElement

const h1Tag = <div><h1><span>hello world with html</span></h1></div>
    

// containerDiv.appendChild(h1Tag);

// app component
// component is a mix of react elements

function TodoItem(props) {
    return (
        <li>{props.message} {props.obj['hello']}</li>
    )
}

// function TodoList() {
//     return (
//         <ul>
//             <TodoItem message="walk piglet" obj={ {'hello': 'world'} } />
//             <TodoItem message="play with piglet" obj={ {'hello': 'bar'} } />
//             <TodoItem message="buy soya milk" obj={ {'hello': 'katz'} } />
//         </ul>
//     )
// }

class TodoList extends React.Component {
    state = {
        tasks: []
    }

    // async await
    // Promise chaining
    // Promise.all([fetch(), fetch()]).then()

    // lanbda functions
    // this
    componentDidMount() {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((res) => {
                res.json().then((jsonArray) => {
                    
                    this.setState({
                        tasks: jsonArray
                    });               

                })
            })
    }

    buttonClick = () => {
        // alert('hello react component event');

        this.setState({
            tasks: []
        });          
        
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((res) => {
                res.json().then((jsonArray) => {
                    
                    this.setState({
                        tasks: jsonArray
                    });               

                })
            })
    }

    render() {
        // return (
        //     <ul>
        //         <TodoItem message="walk piglet" obj={ {'hello': 'world'} } />
        //         <TodoItem message="play with piglet" obj={ {'hello': 'bar'} } />
        //         <TodoItem message="buy soya milk" obj={ {'hello': 'katz'} } />
        //     </ul>
        // )

        const tasks = this.state.tasks;

        // this.props

        // Array.prototype.map

        return (
            <div>
                <ul>
                    {
                        tasks.map(function(task) {
                            return <TodoItem message={task.title} obj={ {'hello': task.description} } />
                        })
                    }
                </ul>
                <button onClick={this.buttonClick} >Refresh from server</button>
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('container'));