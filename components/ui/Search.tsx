import React from 'react'
import { SearchProps } from '../../types'

const Search: React.FC<SearchProps> = ({ search, onSearchChange }) => {
  return (
    <div>
        <label htmlFor="search" className="block text-sm font-bold text-gray-700">Buscar</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="mt-1 block w-full px-3 py-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  )
}

export default Search