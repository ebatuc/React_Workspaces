import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
  const response = await axios.get('https://localhost:7025/api/Blog');
  return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;

export const selectBlogs = (state) => state.blog.blogs;
export const selectStatus = (state) => state.blog.status;
export const selectError = (state) => state.blog.error;
