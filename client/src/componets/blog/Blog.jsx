import React, { memo, useEffect, useState } from "react";
import { getBlogs } from "../../api/blog";
import "./Blog.scss";
import CardbBlog from "../card/CartBlog/CardBlog";

function Blog() {
  const [data, setData] = useState(null);//data: lưu trữ danh sách các bài viết blog. Bắt đầu với giá trị null.
  const fetchData = async () => {
    try {
      const res = await getBlogs();
      if (res.success) {
        setData(res?.blog);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //fetchData: hàm async để gọi API lấy danh sách blog. Nếu API trả về thành công (res.success), thì cập nhật state data với danh sách blog.
  useEffect(() => {
    fetchData();
  }, []);

  if (data == null || data.length === 0) {
    return null;
  }

  return (
    <div className="blogitem">
      <div className="blogitem--name">
        <h1>Tin tức</h1>
      </div>
      <div className="content">
        <div className="blogitem--list">
          {data?.map((item) => {
            return <CardbBlog data={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(Blog);
