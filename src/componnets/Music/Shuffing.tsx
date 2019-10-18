import * as React from "react";
import {useState, useEffect} from "react";
import classnames from 'classnames';

export default function Shuffing() {
    const [liWidth, setLiWidth] = useState();
    const [ulWidth, setulWidth] = useState();
    const [moveRight, setMoveRight] = useState();
    const [nowPage, setNowPage] = useState(1);

    useEffect(() => {
        const obj: HTMLElement = document.getElementsByClassName("music-shuffing")[0] as HTMLElement;
        const objWidth = getComputedStyle(obj, null).width;
        // console.log(objWidth!.slice(0, objWidth!.length - 2));
        // console.log(moveRight)
        setulWidth(Number(objWidth!.slice(0, objWidth!.length - 2))*8);
        setLiWidth(Number(objWidth!.slice(0, objWidth!.length - 2)))
        // console.log(ulWidth, moveRight)
    })
    // 轮播图的触摸事件
    const mouseMove:any = (event: any) => {

        const moveStr: string = event.currentTarget.getAttribute("data-url");
        // console.log(moveStr)
        setNowPage(Number(moveStr));
        // console.log((Number(moveStr) - 1) * liWidth!.slice)
        setMoveRight((Number(moveStr) - 1) * liWidth);
        
    }

    return (
        <div className="Musicc">
            <div className="music-shuffing">
                <ul className="shuffing-big" style={{ "width": `${ulWidth}`+ "px", "left": "-" + `${moveRight}`+ "px"}}>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require('../../images/music/xuezhiqian.jpg')} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/liyuchun.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/jj.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/mengmian.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/choaliu.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/yangui.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/xusong.jpg")} alt=""/>
                            </a>
                        </li>
                        <li style={{"width": `${liWidth}`+"px"}}>
                            <a href="">
                                <img src={require("../../images/music/bang.jpg")} alt=""/>
                            </a>
                        </li>

                </ul>
                <ul className="shuffing-small">
                    <li><div data-url="1" className={classnames({"shuffing-special": nowPage === 1, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="2" style={{"height": "6px"}} className={classnames({"shuffing-special": nowPage === 2, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="3" className={classnames({"shuffing-special": nowPage === 3, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="4" className={classnames({"shuffing-special": nowPage === 4, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="5" className={classnames({"shuffing-special": nowPage === 5, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="6" className={classnames({"shuffing-special": nowPage === 6, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="7" className={classnames({"shuffing-special": nowPage === 7, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                    <li><div data-url="8" className={classnames({"shuffing-special": nowPage === 8, "shuffing-move": true})} onMouseMove={mouseMove} /></li>
                </ul>
            </div>
        </div>
    )
}