import * as React from "react";
import "./index.less"
import {useRef, useEffect, useState} from "react";
import classnames from 'classnames';

interface IProps {
    imgUrl?: string,
    songName?: string,
    auther?: string,
    resource?: string
}

export default function Play(props: IProps) {
    // 是否暂停播放
    const [isPause, setIsPause] = useState(true)
    const { 
        imgUrl="http://mcontent.10086.cn/newlv2/new/album/20191017/1125235540/s_XeEkGRrqa0DpcdJe.jpg",
        songName="Easy",
        auther="Camila Cabello-Easy",
        resource="http://tyst.migu.cn/public/product5th/product35/2019/10/1618/2019年10月11日09点53分内容准入SONY17首907735/全曲试听/Mp3_64_22_16/6005971JMLU.mp3"
    }   = props;
    const audioRef: any = useRef(null);
    // const [totalTime, setTotalTime] = useState();
    useEffect(() => {
        // 监听浏览开始播放指定的音频
        audioRef.current.addEventListener("canplay", (event: Event) => {
            const totalTime = parseInt(audioRef.current.duration, 10);
            console.log(totalTime)
            
        })
        // 播放中添加时间变化监听
        audioRef.current.addEventListener("timeupdate", (event: Event) => {
            
            // console.log(audioRef.current.currentTime, 1)
            
        })
        audioRef.current.volume = 0.5;

        console.log(audioRef.current.volume)
        audioRef.current.addEventListener("pause", (event: Event) => {
            
            console.log("播放完毕");
            setIsPause(true);
        })
    });

    const onPlay = () => {
        audioRef.current.play();
        setIsPause(false);
    }
    const onPause = () => {
        
        audioRef.current.pause()
        setIsPause(true);
    }

    return (
        <div className="play">

            <div className="play-listen">
                <img src={imgUrl} alt="歌曲宣传图片"/>
            </div>
            <div className="play-listen">
                <p>{songName}</p>
                <p>{auther}</p>
            </div>
            <div className="play-listen">
                <span className="listen-play">
                    {
                        isPause ?
                        // 暂停
                            <i onClick={onPlay} className={classnames({"iconfont": true})}>
                                &#xe607;                                
                            </i>
                        :
                        // 播放
                            <i onClick={onPause} className={classnames({"iconfont": true})}>
                                &#xe611;
                            </i>
                    }
                </span>
                <span className="listen-list"/>
            </div>
            <audio src={resource} ref={audioRef} />

           
        </div>
    )
}