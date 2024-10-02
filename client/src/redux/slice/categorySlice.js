import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../../api/category";

const initialState = {
  data: null,
  isLoading: true,
};

export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const res = await getCategory();
  return res.category;
});
/*fetchCategory: Là một async thunk được tạo bằng createAsyncThunk. Khi hành động này được dispatch, nó sẽ gọi hàm API getCategory để lấy dữ liệu danh mục.
Hành động này có ba trạng thái:
pending: Khi yêu cầu bắt đầu và đang chờ kết quả.
fulfilled: Khi yêu cầu thành công và trả về dữ liệu.
rejected: Khi yêu cầu thất bại.*/
export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.data = null;
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.data = null;
        state.isLoading = false;
      });
  },
});
/*fetchCategory.pending: Khi đang tải dữ liệu, data sẽ là null và isLoading là true.
fetchCategory.fulfilled: Khi dữ liệu được tải thành công, cập nhật data với payload và đặt isLoading là false.
fetchCategory.rejected: Khi có lỗi xảy ra trong quá trình tải dữ liệu, đặt lại data là null và isLoading là false.*/
export default categorySlice.reducer;
/*Cách hoạt động của dispatch:
Gửi hành động: Khi bạn gọi dispatch(action), bạn gửi một hành động đến Redux store. Hành động này thường là một đối tượng JavaScript chứa một thuộc tính type (để xác định loại hành động) và có thể chứa các dữ liệu bổ sung trong các thuộc tính khác.

Xử lý hành động: Redux store sẽ nhận hành động này và chuyển nó đến reducer. Reducer là một hàm nhận vào trạng thái hiện tại và hành động, và trả về trạng thái mới dựa trên hành động đó.

Cập nhật trạng thái: Sau khi reducer xử lý hành động, Redux store sẽ cập nhật trạng thái mới và thông báo cho tất cả các thành phần React liên quan rằng trạng thái đã thay đổi. Các thành phần này sẽ tự động render lại với trạng thái mới.*/