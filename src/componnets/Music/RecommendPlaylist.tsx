import * as React from "react";

interface IProps {
    description: string,

}

const PlayList = (props: IProps) => {
    const {description} = props;
    return (
        <div className="list">
            <img src={require("../../images/music/playList/jiuyue.jpg")} alt=""/>
            <p>{description}</p>
        </div>
    )
}

export default function RecommendPlaylist() {
    return (
        <div className="Recommend-playlist">
            <div className="playlist-container">
                <div className="container-h3">
                    <h3>推荐歌单</h3>
                    <div className="container-direction">
                        <i className="iconfont">&#xe702;</i>
                    </div>
                </div>
            </div>

            <div className="playList">
                <PlayList description="热门影视推荐"/>
                <PlayList description="热门影视推荐"/>
                <PlayList description="[响指系]无与伦比的缤纷节拍"/>
                <PlayList description="热门影视推荐"/>
                <PlayList description="热门影视推荐"/>
                <PlayList description="热门影视推荐"/>

            </div>

        </div>
    )
}