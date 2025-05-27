import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../../redux/slices/modalsAdmin';

import Close from "../../../assets/iconCheckoutPage/XCircle.svg"
import InputProductAdmin from './InputProductAdmin'

export default function AddProductAdmin() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { addProduct } = useSelector((state) => state.modals);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Coffee' },
    { id: 2, name: 'Non-Coffee' },
    { id: 3, name: 'Food' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Snack' },
    { id: 6, name: 'Topping' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    category_id: '1', // Default category
    size: []
  });
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  
  // Cleanup image previews when component unmounts
  useEffect(() => {
    return () => {
      // Revoke all object URLs to avoid memory leaks
      imagePreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Convert price and stock to integers when needed
    if (name === 'price' || name === 'stock') {
      // Remove non-numeric characters and parse as integer
      const numericValue = parseInt(value.replace(/\D/g, '') || '0', 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, size: [...formData.size, parseInt(value)] });
    } else {
      setFormData({ ...formData, size: formData.size.filter(s => s !== parseInt(value)) });
    }
  };
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
    
    // Revoke any existing preview URLs
    imagePreviews.forEach(url => URL.revokeObjectURL(url));
    
    // Create new preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      const form = new FormData();
      
      // Append form fields, ensuring price and stock are sent as integers
      for (const key in formData) {
        if (key === 'size') {
          // Handle size array
          formData.size.forEach(sizeId => {
            form.append('size', sizeId);
          });
        } else if (key === 'price' || key === 'stock') {
          // Ensure these are integers
          const value = parseInt(formData[key], 10) || 0;
          form.append(key, value);
        } else {
          form.append(key, formData[key]);
        }
      }
      
      // Append images
      imageFiles.forEach(image => {
        form.append('images', image);
      });
      
      const response = await fetch('http://localhost:8080/api/product', {
        method: 'POST',
        body: form,
        headers: {
          'Authorization': `Bearer ${auth.user.token}`
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add product');
      }
      
      const result = await response.json();
      setSuccess('Product added successfully!');
      
      // Reset form
      setFormData({
        name: '',
        price: '',
        description: '',
        stock: '',
        category_id: '1',
        size: []
      });
      setImageFiles([]);
      setImagePreviews([]);
      
      // Close modal after a delay
      setTimeout(() => {
        dispatch(modalAction.closeAddProduct());
        // Refresh product list - this would need to be implemented in ProductListAdmin
        window.location.reload();
      }, 2000);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="inset-0 overflow-hidden ">
      {/* Semi-transparent overlay */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          addProduct ? "opacity-50" : "opacity-0 pointer-events-none"
        }`} 
        onClick={() => dispatch(modalAction.toggleModalAddProduct())}
      ></div>
      
      {/* Sidebar sliding from right */}
      <div 
        className={`absolute top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 xl:w-2/5 bg-white shadow-xl transform transition-all duration-300 ease-in-out ${
          addProduct ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => dispatch(modalAction.toggleModalAddProduct())}
          >
            <img src={Close} alt="close" className="w-6 h-6" />
          </button>
        </div>
        
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <form id="addProductForm" onSubmit={handleSubmit}>
              {/* Image Upload */}
              <div className='mb-6'>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Photos</label>
                <div className="flex flex-wrap gap-3 mb-3">
                  {imagePreviews.length > 0 ? (
                    imagePreviews.map((url, index) => (
                      <div key={index} className="w-24 h-24 rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                      </div>
                    ))
                  ) : (
                    <div className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
                      <p className="text-gray-500">Upload product images (max 3)</p>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor='inputImg' className='inline-flex items-center px-4 py-2 bg-orange text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                    </svg>
                    Upload Images
                  </label>
                  <input type="file" name="imgProduct" id="inputImg" multiple accept='image/*' hidden onChange={handleImageChange}/>
                </div>
              </div>
              
              {/* Product information */}
              <div className="space-y-6">
                <InputProductAdmin id={"name"} label={"Product Name"} name={"name"} placeholder={"Enter Product Name"} type={"input"} value={formData.name} onChange={handleInputChange}/>
                
                <InputProductAdmin id={"price"} label={"Price"} name={"price"} placeholder={"Enter Product Price"} type={"number"} value={formData.price} onChange={handleInputChange}/>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select 
                    name="category_id" 
                    id="category" 
                    className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 py-2 px-3'
                    value={formData.category_id} 
                    onChange={handleInputChange}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    name="description" 
                    id="description" 
                    placeholder='Enter Product Description' 
                    className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 py-2 px-3' 
                    rows={4}
                    value={formData.description} 
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Size</label>
                  <div className='flex flex-wrap gap-3'>
                    <div>
                      <input type="checkbox" name="size" id="regular" className='peer hidden' value={"1"} onChange={handleSizeChange} />
                      <label htmlFor="regular" className='inline-block px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 peer-checked:border-orange peer-checked:bg-orange-50 cursor-pointer transition-colors'>R</label>
                    </div>
                    <div>
                      <input type="checkbox" name="size" id="large" className='peer hidden' value={"2"} onChange={handleSizeChange} />
                      <label htmlFor="large" className='inline-block px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 peer-checked:border-orange peer-checked:bg-orange-50 cursor-pointer transition-colors'>M</label>
                    </div>
                    <div>
                      <input type="checkbox" name="size" id="extraLarge" className='peer hidden' value={"3"} onChange={handleSizeChange} />
                      <label htmlFor="extraLarge" className='inline-block px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 peer-checked:border-orange peer-checked:bg-orange-50 cursor-pointer transition-colors'>L</label>
                    </div>
                    <div>
                      <input type="checkbox" name="size" id="250gr" className='peer hidden' value={"4"} onChange={handleSizeChange} />
                      <label htmlFor="250gr" className='inline-block px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 peer-checked:border-orange peer-checked:bg-orange-50 cursor-pointer transition-colors'>Not Drink</label>
                    </div>
                  </div>
                </div>
                
                <InputProductAdmin id={"stock"} label={"Stock"} name={"stock"} placeholder={"Enter Product Stock"} type={"number"} value={formData.stock} onChange={handleInputChange}/>
                
                {/* Status Messages */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    <div className="flex">
                      <svg className="h-5 w-5 text-red-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p>{error}</p>
                    </div>
                  </div>
                )}
                
                {success && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
                    <div className="flex">
                      <svg className="h-5 w-5 text-green-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>{success}</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end gap-3">
            <button 
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange"
              onClick={() => dispatch(modalAction.toggleModalAddProduct())}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit"
              form="addProductForm"
              className="px-4 py-2 bg-orange border border-transparent rounded-md text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </div>
              ) : 'Add Product'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

