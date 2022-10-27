import React from "react";

const PersonTable = props => {
    return (
        <div>
            <table className="table table-dark text-light">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Hair Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td>{props.age}</td>
                        <td>{props.hairColor}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PersonTable;