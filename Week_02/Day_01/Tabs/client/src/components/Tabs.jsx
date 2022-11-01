import React from 'react'

const Tabs = (props) => {
    const {tabs} = props;
    const {current, setCurrent} = props;

    const changeTab = (event, i) => {
        event.preventDefault();
        setCurrent(tabs[i]);
        console.log(tabs[i]);
    }

    return (
        <div className='col-6'>
            <div className='d-flex justify-content-between mt-5 flex-wrap'>
                {
                    tabs.map((tab, i) => <div key={i} className='border border-dark p-3 mb-2 tab' onClick={ event => {changeTab(event, i)}}>Tab {i+1}</div>)
                }
            </div>
            <div className='d-flex justify-content-center align-items-center border border-dark content-container'>
                {current.content}
            </div>
        </div>
    )
}

export default Tabs