import React, {Component} from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    // state = {
    //     tasks: []
    // }

    // componentDidMount() {
    //     // fetch('https://nztodo.herokuapp.com/api/task/?format=json')
    //     //     .then((res) => {
    //     //         res.json().then((jsonArray) => {
                    
    //     //             this.setState({
    //     //                 tasks: jsonArray
    //     //             });               

    //     //         })
    //     //     })    
    // }

    render() {
        return (
            <FlatList 
                data={this.state.tasks}
                renderItem={(json) => {
                    return <TodoItem key={json.item.id} message={json.item.title} />
                }}
            />
        )
    }
}