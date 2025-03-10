import React from 'react'
import { SelectCitiesProps } from '../../types'


const SelectCities: React.FC<SelectCitiesProps> = ({city, onCityChange}) => {
  return (
    <div>
        <label htmlFor="city" className="block text-sm font-bold text-gray-700">Cidade</label>
        <select
          id="city"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Todas as cidades</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Belo Horizonte">Belo Horizonte</option>
          <option value="Salvador">Salvador</option>
          <option value="Recife">Recife</option>
          <option value="Olinda">Olinda</option>
          <option value="Brasilia">Brasília</option>
          <option value="Fortaleza">Fortaleza</option>
          <option value="Porto Alegre">Porto Alegre</option>
          <option value="Curitiba">Curitiba (sem dados)</option>
          <option value="Florianópolis">Florianópolis (sem dados)</option>
          <option value="Natal">Natal (sem dados)</option>
          <option value="João Pessoa">João Pessoa (sem dados)</option>
        </select>
      </div>
  )
}

export default SelectCities