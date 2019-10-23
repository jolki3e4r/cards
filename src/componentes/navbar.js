import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <h3 className=" mx-3">number Of people <span className="badge badge-secondary">{this.props.numeroTargetas}</span></h3>
                </nav>
            </div>
        )
    }
}
