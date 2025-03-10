import React from 'react'
import { DateProps } from '../../types'

const Date: React.FC<DateProps> = ({ date, onDateChange }) => {
  return (
    <div>
        <label htmlFor="date" className="block text-sm font-bold text-gray-700">Data</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-1 block w-full px-3 py-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  )
}

export default Date