import React from 'react'

const SearchInput = (props) => {
    const KeyChange = (e) => {
        const searchKey = e.target.value
        props.onSearchChange &&
    props.onSearchChange(searchKey)    
    }
    return (
        <input type="search" onChange={ keyChange } />
    )
}

export default SearchInput