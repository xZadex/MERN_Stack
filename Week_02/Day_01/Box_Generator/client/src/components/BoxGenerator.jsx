import React, { useState } from 'react'

export default function BoxGenerator() {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <div className='col-6'>
                <div className='container d-flex flex-column'>
                    <form onSubmit={""}>
                    <label htmlFor="color" className='mt-2 label label-default'>Color</label>
                    <div className='d-flex align-items-center justify-content-center'>
                        <input className='form-control mr-2' type="text"/>
                        <button type="submit" className='btn btn-outline-dark'>Add</button>
                    </div>
                    </form>
                </div>
            </div>
            <div className='container'>
                
            </div>
        </div>
    )
}