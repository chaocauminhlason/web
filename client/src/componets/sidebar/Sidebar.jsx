import React from "react";
import "./Sidebar.scss";
import { IoMdClose } from "react-icons/io";

function Sidebar({ children, setListMenuRp }) {
  return (
    <div className="sidebarMN" onClick={() => setListMenuRp(false)}>
      <div className="sidebarMN--list" onClick={(e) => e.stopPropagation()}>
        <div className="sidebarMN--list--close">
          <span onClick={() => setListMenuRp(false)}>
            <IoMdClose size={24} />
          </span>
        </div>
        <div className="sidebarMN--list--children">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
//div.sidebarMN: Là phần tử cha, khi click vào phần này, nó sẽ gọi setListMenuRp(false) để đóng sidebar.
//onClick={(e) => e.stopPropagation()}: Điều này ngăn chặn sự kiện click từ phần tử con "truyền" lên cha. Khi người dùng click vào phần nội dung bên trong sidebar, nó không đóng sidebar.