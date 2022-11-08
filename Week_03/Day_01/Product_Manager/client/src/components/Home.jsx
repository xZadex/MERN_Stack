import React from 'react'

const Home = () => {
    return (
        <div>
            <h1 className='mt-3 mb-5'>Product Manager</h1>
            <form>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Title</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Price</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Description</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn btn-outline-dark px-5 mt-3'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home