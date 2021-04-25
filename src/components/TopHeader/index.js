import React from "react";
import { Layout } from "antd";
import "./TopHeader.scss";
const { Header } = Layout;

function TopHeader() {
	return <Header className="top-header">
        <div className="brand-name">
            <h2>ClipShare</h2>
        </div>
    </Header>;
}

export default TopHeader;
