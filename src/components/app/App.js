import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/seacrh-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./App.css";
import { ItemAddForm } from "../item-add-form/item-add-form";

export default class App extends Component {
  maxId = 100; 
  state = {
    todoData: [
      this.createTodoItem("Drink Cofee"),
      this.createTodoItem("I am man"),
      this.createTodoItem("Bla Bla Blaa"),
    ],
  };



  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    //generete id
    const newItem = this.createTodoItem(text);
    // add element in array?
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty (arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName ]};

    // construte new arr
     return[
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
     
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
     
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };
  
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  

  render() {

    const {todoData} = this.state
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount                  


    return (
      <div className="all-todo">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
