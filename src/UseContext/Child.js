import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log(this.props) //Context: {name: "易烊千玺", age: "20"}
        const { Context } = this.props
        return (
            <div>
                <div>姓名：{ Context.name }</div>
                <div>年龄：{ Context.age }</div>
            </div>
        )
    }
}
