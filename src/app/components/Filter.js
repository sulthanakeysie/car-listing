import React from 'react';

const Filter = ({ brands, models, selectedBrand, selectedModel, onBrandChange, onModelChange }) => {
  return (
    <div className="flex space-x-4 mb-4 w-full md:w-auto  justify-end items-center">
        <p className='font-[500] md:block hidden'>Filter By</p>
      <select value={selectedBrand} onChange={(e) => onBrandChange(e.target.value)} className="p-2 border rounded-md shadow-sm">
        <option value="">All Brands</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
      <select value={selectedModel} onChange={(e) => onModelChange(e.target.value)} className="p-2 border rounded-md shadow-sm">
        <option value="">All Models</option>
        {models.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
