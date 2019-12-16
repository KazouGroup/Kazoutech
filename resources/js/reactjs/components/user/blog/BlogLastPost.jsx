import React, {Component} from "react";
import {Link} from "react-router-dom";
import moment from 'moment'

require("moment/min/locales.min");
moment.locale('fr');

class BlogLastPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        dyaxios.get(route('api_active_last.blogs')).then(response =>
            this.setState({
                blogs: [...response.data],
            }));
    }


    render() {
        const {blogs} = this.state;
        return (

            <div className="container">

                <div className="row">

                    {blogs.map((item) => (
                        <div className="col-lg-4">
                            <div className="card card-background" style={{backgroundImage: "url(" + item.photo + ")"}}>
                                <div className="card-body text-center">
                                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                                        <i className="ni ni-controller text-danger"/>
                                    </div>
                                    <a href="..">
                                        <h3 className="card-title">{item.occupation.name}</h3>
                                    </a>
                                    <b className="desc text-white opacity-8"
                                       dangerouslySetInnerHTML={{__html: (item.body.length > 81 ? item.body.substring(0, 81) + "..." : item.body)}}/>
                                    <br/>
                                    <br/>
                                    <a href=".." className={`btn btn-sm btn-${item.color.name}`}>
                                        Watch Later
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>


            </div>
        )
    }

}

export default BlogLastPost;