import React from 'react'

const HeroHeader = ({setSearchString}) => {

    return (
        <div className='hero_header'>
            <div className='hero_header_layer '>
                <div className='search_section'>
                    <div className='row'>
                        <input className='form-control' onChange={(e) => {
                            setSearchString(e.target.value)
                        }} type='text' placeholder='Enter text...'/>
                        <button className='btn btn_search mt-3'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader