import * as React from "react"

interface IProps {
    imgUrl: string,
    songName: string,
    auther: string
}

const NewSong = (props: IProps) => {
    const {imgUrl, songName, auther} = props;
    return (
        <div className="new-song">
            <div className="list"><img src={imgUrl} alt=""/></div>
            <div className="list">
                <p>{songName}</p>
                <p className="arither">{auther}</p>
            </div>
            <div className="list">
                <i className="iconfont">&#xe700;</i>
            </div>
            <div className="clear-null"/>
        </div>
    )
}

export default function NewCourier() {
    return (
        <div className="new-courier">
            <div className="new-container">
                <div className="container-h3">
                    <h3>推荐歌单</h3>
                    <div className="container-direction">
                        <i className="iconfont">&#xe702;</i>
                    </div>
                </div>
            </div>

            <div className="new-songs">
                <NewSong 
                    imgUrl="http://mcontent.10086.cn/newlv2/new/album/20191008/1125044161/s_8VUA5ylA9KeDRjCf.jpg"
                    songName="Nice To Meet Ya" 
                    auther="Niall Horan-Nice To Meet Ya"              
                />
                <NewSong 
                    imgUrl="http://mcontent.10086.cn/newlv2/new/album/20191017/1125235540/s_XeEkGRrqa0DpcdJe.jpg"
                    songName="Easy" 
                    auther="Camila Cabello-Easy"              
                />
                <NewSong 
                    imgUrl="http://mcontent.10086.cn/newlv2/new/album/20191013/1125064682/s_OH6sfexHlv8gqH5d.jpg"
                    songName="Chosen One 邱森万" 
                    auther="王欣晨 Amanda"              
                />
                
            </div>
        </div>
    )
}