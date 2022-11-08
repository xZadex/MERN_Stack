import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Main = () => {
    const [ allHeroes, setAllHeroes ] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/heroes')
        .then((response) => {
            console.log(response.data.heroes)
            setAllHeroes(response.data.heroes)
        })
        .catch((err)=> {console.log("Ran into an error with getting heros", err)})
    },[])
    return (
        <>
            <div className='container d-flex flex-column align-items-center justify-content-center'>
                <div>
                    <h2>All Heroes</h2>
                </div>
                <div>
                    <table className="table table-striped table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Hero</th>
                                <th>Rating</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    allHeroes.map((hero, i)=> {
                                        return (
                                        <tr key={i}>
                                            <td><Link to={`/hero/${hero._id}`}>{hero.name}</Link></td>
                                            <td>{hero.rating}</td>
                                            <td><img src={hero.image} className='hero-image' alt=''/></td>
                                            <td><button>Button</button></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Main