import React from 'react';
import './ProgressBar.scss';
import PageList from './PageList';
import appRoutes from "../../shared/appRoutes";
import {Link} from "react-router-dom";

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: (this.props.progress + 1) * 20,
            page: this.props.progress,
            list: PageList,
        }
    }

    getPrevPage(){
        if (this.state.page > 0) {
            return this.state.page - 1;
        }
        return null;
    }

    getNextPage(){
        if (this.state.page < this.state.list.length - 1) {
            return this.state.page + 1;
        }
        return null;
    }

    render() {
        const { progress, list, page } = this.state;
        const prev = this.getPrevPage();
        const next = this.getNextPage();

        return (
            <div className="progressbar">
                {prev !== null ?
                    <Link
                        key={prev}
                        to={`${appRoutes.home}process/${list[prev].url}`}>
                        <div className="arrow-left">
                        <div className="arrow"></div>
                        <span><h5>{list[prev].name}</h5></span></div>
                    </Link>: null}
                <div className="progressbar-container">

                    <div className="progressbar-complete" style={{width: `${progress}%`}}>
                        <div className="progressbar-liquid"></div>
                    </div>
                    <span className="progress">

                        <div className={"col-20-p" + (progress === 20 ? '' : ' progress-sm-disabled')}>
                            <Link
                                key={1}
                                to={`${appRoutes.problem}`}>
                            <div className={"row justify-content-center" + (progress > 0 ? ' progressbar-past' : '')}>
                                <h1 className={"d-none d-xl-block col-xl-3 col-md-3 col-sm-3"}>01</h1>
                                <h5 className={"col-xl-7 col-lg-8 col-md-6 col-sm-6"}>Problem <br/> Space</h5>
                            </div>
                            </Link>
                        </div>

                        <div className={"col-20-p" + (progress === 40 ? '' : ' progress-sm-disabled')}>
                            <Link
                                key={2}
                                to={`${appRoutes.exploratory}`}>
                            <div className={"row justify-content-center" + (progress > 20 ? ' progressbar-past' : '')}>
                            <h1 className={"d-none d-xl-block col-xl-3 col-md-3 col-sm-3"}>02</h1>
                            <h5 className={"col-xl-7 col-lg-8 col-md-6 col-sm-7"}>Exploratory <br/>  Research</h5>
                            </div>
                            </Link>
                        </div>


                        <div className={"col-20-p" + (progress === 60 ? '' : ' progress-sm-disabled')}>
                            <Link
                                key={3}
                                to={`${appRoutes.generative}`}>
                            <div className={"row justify-content-center" + (progress > 40 ? ' progressbar-past' : '')}>
                            <h1 className={"d-none d-xl-block col-xl-3 col-md-3 col-sm-3"}>03</h1>
                            <h5 className={"col-xl-7 col-lg-8 col-md-6 col-sm-6"}>Generative <br/> Research</h5>
                                </div>
                            </Link>
                        </div>


                        <div className={"col-20-p" + (progress === 80 ? '' : ' progress-sm-disabled')}>
                            <Link
                                key={4}
                                to={`${appRoutes.need}`}>
                            <div className={"row justify-content-center" + (progress > 60 ? ' progressbar-past' : '')}>
                            <h1 className={"d-none d-xl-block col-xl-3 col-md-3 col-sm-3"}>04</h1>
                            <h5 className={"col-xl-7 col-lg-9 col-md-6 col-sm-7"}>Design For <br/> User Needs</h5>
                                </div>
                            </Link>
                        </div>

                        <div className={"col-20-p" + (progress === 100 ? '' : ' progress-sm-disabled')}>
                            <Link
                                key={page}
                                to={`${appRoutes.mvp}`}>
                            <div className={"row justify-content-center" + (progress > 80 ? ' progressbar-past' : '')}>
                            <h1 className={"d-none d-xl-block col-xl-3 col-md-3 col-sm-3"}>05</h1>
                            <h5 className={"col-xl-7 col-lg-9 col-md-6 col-sm-7"}>Design For <br/> Guidance</h5>
                                </div>
                            </Link>
                        </div>

                    </span>

                </div>
        {next !== null ?
            <Link
                key={0}
                to={`${appRoutes.home}process/${list[next].url}`}>
            <div className="arrow-right">
                <span><h5>{list[next].name}</h5></span>
                <div className="arrow"></div>
            </div>
            </Link>: null}
        </div>

        )
    }
}

