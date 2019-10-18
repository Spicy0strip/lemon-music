import {useState, useEffect} from "react";
import "./index.less";
import * as React from 'react';
import TopTop from './TopTop';

const TopSearch = () => {
    return (
        <div className="top-search">
            <div className="input-search">
                <span>
                    <i className="iconfont">&#xe707;</i>
                    &nbsp;
                    薛之谦
                </span>
            </div>
        </div>
    )
}

const TopNav = () => {
    let url: string = window.location.href;
    url = url.slice(url.lastIndexOf("/") + 1);
    const [status, setStatus] = useState<string>(url === "" ? "music" : url);
    const clickNav: any = (newStatus: string) => {
        if(status !== newStatus) {
            setStatus(newStatus);
        }
    }

    useEffect(() => {
        if(window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/music";
        }
    })

    return (
        <div className="top-nav">
            <TopTop status={status} clickNav = {clickNav} />
            <TopSearch/>
        </div>
    );
}

export default TopNav;