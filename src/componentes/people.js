import React, { Component } from 'react'

class People extends Component {
    render() {
        return (
            < React.Fragment >
                {
                    this.props.datos.map((persona, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={persona.photo} className="rounded-circle mx-auto d-block" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{persona.name} {persona.surname}</h5>
                                    <p className="card-text">{persona.name} is {persona.age} years old is From {persona.region} </p>
                                    <button type="button"
                                        class="btn btn-danger"

                                    >DELETE</button>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment >
        )
    }
}

export default People
