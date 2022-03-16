import { Space, Typography } from "antd";
import React from "react";

const AppLayout: React.FC = ({ children }) => {
  return (
    <Space direction="vertical">
      <header>
        <Typography.Title>Sōnar mastan</Typography.Title>
      </header>
      {children}
    </Space>
  );
};

export default AppLayout;
