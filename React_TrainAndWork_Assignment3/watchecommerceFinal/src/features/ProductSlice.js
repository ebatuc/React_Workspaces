
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const response = await axios.get('http://localhost:3000/products');
    const products = response.data;

    const brandsResponse = await axios.get('http://localhost:3000/brands');
    const brands = brandsResponse.data;

    const updatedProducts = products.map(product => ({
      ...product,
      brandTitle: brands.find(brand => brand.id === product.brandId)?.title,
    }));

    dispatch(setProducts(updatedProducts));
  } catch (error) {
    dispatch(setError(error.message || 'Error fetching products'));
  }
};

export default productSlice.reducer;
