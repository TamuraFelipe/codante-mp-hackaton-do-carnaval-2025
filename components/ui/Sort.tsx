import React from 'react'
import { SortProps } from '../../types'

const Sort: React.FC<SortProps> = ({ sort, onSortChange }) => {
  return (
    <div>
      <label htmlFor="sort" className="block text-sm font-bold text-gray-700 text-right">Ordenar</label>
      <div id='sort' className="flex items-center justify-end gap-2">
        <button
          className={`btn-hover flex items-center cursor-pointer  hover:bg-purple-400 rounded-xl w-10 h-10 justify-center ${sort === 'desc' ? 'bg-purple-400' : 'bg-white'}`}
          onClick={() => onSortChange('desc')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={sort === 'desc' ? '#ffffff' : '#BA7FD7'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down h-8 w-8"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </button>

        <button
          className={`btn-hover flex items-center cursor-pointer  hover:bg-purple-400 rounded-xl w-10 h-10 justify-center ${sort === 'asc' ? 'bg-purple-400' : 'bg-white'}`}
          onClick={() => onSortChange('asc')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={sort === 'asc' ? '#ffffff' : '#BA7FD7'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up h-8 w-8"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Sort;
