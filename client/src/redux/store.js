import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//cấu hình Redux store trong một ứng dụng React với khả năng lưu trữ trạng thái của ứng dụng (state) vào local storage bằng cách sử dụng redux-persist
import userReducer from "./slice/userSlice";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import cardReducer from "./slice/cartSlice";
/*storage: Được import từ redux-persist/lib/storage, đây là mặc định để lưu trữ trạng thái vào local storage của trình duyệt.
combineReducers: Dùng để kết hợp nhiều reducer thành một reducer duy nhất.
redux-persist: Bộ thư viện hỗ trợ lưu trữ và phục hồi trạng thái của Redux vào local storage hoặc các cơ chế lưu trữ khác.
userReducer, categoryReducer, productReducer, cardReducer: Các reducer cụ thể, quản lý các phần khác nhau của trạng thái ứng dụng (user, category, product, cart).*/
const rootReducers = combineReducers({
  user: userReducer,
  category: categoryReducer,
  products: productReducer,
  car: cardReducer,
});
/*rootReducers: Kết hợp các reducer lại thành một root reducer. Mỗi reducer xử lý một phần của trạng thái (state):
user: Trạng thái liên quan đến người dùng.
category: Trạng thái liên quan đến danh mục sản phẩm.
products: Trạng thái liên quan đến danh sách sản phẩm.
car: Trạng thái liên quan đến giỏ hàng.*/
const persistConfig = {
  key: "root",
  storage,
};
/*persistConfig: Định nghĩa cấu hình cho việc lưu trữ:
key: Xác định khóa cho phần lưu trữ (ở đây là "root").
storage: Sử dụng local storage của trình duyệt để lưu trữ trạng thái.*/
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;
