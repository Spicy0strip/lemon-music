import * as React from 'react';
import "./index.less";
import classnames from 'classnames';

interface IProps {
    status: string,
    clickNav: any
}

class TopTop extends React.Component<IProps, {}> {
    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="top-top">
                <div className="top-center">
                    <ul>
                        <li><a className={classnames({"nowing": this.props.status === "me"})} href="/me">我的</a></li>
                        <li><a className={classnames({"nowing": this.props.status === "music"})} href="/music">音乐</a></li>
                        <li><a className={classnames({"nowing": this.props.status === "dynamic"})} href="/dynamic">动态</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopTop;