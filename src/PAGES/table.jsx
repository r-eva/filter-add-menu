import React, { Component } from 'react';
import './table.css'

class table extends Component {
    
    state = {
        menu: ["milk", "coffee", "oranges", "bread"],
        inputText: ''
    }

    ///// SHOWING ALL LIST
    showMenu = () => {
        if (this.state.inputText !== '') {
            var filterArr = this.state.menu.filter(val => val.includes(this.state.inputText.toLocaleLowerCase()))
            if (filterArr.length === 0) {
                return  <tr>
                            <td colSpan="2" className="not-found">Text not found.</td>
                        </tr>
            }
            var jsx = filterArr.map((val, idx) => {
                return <tr key={idx}>
                            <td colSpan="2">{val.charAt(0).toUpperCase() + val.slice(1, val.length)}</td>
                       </tr>
            })
            return jsx
        }
        jsx = this.state.menu.map((val, idx) => {
            return <tr key={idx}>
                        <td colSpan="2">{val.charAt(0).toUpperCase() + val.slice(1, val.length)}</td>
                   </tr>
        })
        return jsx
    }

    // GETTING VALUE OF TEXT INPUT
    textInputed = (e) => {
        this.setState({inputText: e.target.value})
    }

    // ADD ITEM TO LIST
    addItem = () => {
        var userInput = this.state.inputText.toLowerCase()
        if (this.state.menu.includes(userInput)) {
            alert(`${this.state.inputText} already exists!`)
        } else if (userInput === '') {
            alert('Please fill the form.')
        } else {
            var newMenu = this.state.menu
            newMenu.push(userInput)
            this.setState({menu: newMenu, inputText: ''})
        }
    }

    render() {
        return (
            <div className="container1">
                <div className="container2">
                    <table id="menu">
                        <thead className="head">
                            <tr>
                                <td className="search"><input type='text' placeholder='Search' value={this.state.inputText} onChange={this.textInputed}/></td>
                                <td><input className="btn" type='button' value='+' onClick={this.addItem}/></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showMenu()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default table;