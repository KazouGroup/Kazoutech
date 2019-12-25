import React, {Component} from "react";
import FooterUserSite from "../../inc/FooterUserSite";
import NavUserSIte from "../../inc/NavUserSIte";
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";
import moment from "moment";
import ProfileSiteAnnonces from "./ProfileSiteAnnonces";
import AnnonceList from "../annonce/AnnonceList";
import ProfileSiteBlogs from "./ProfileSiteBlogs";


class ProfileSiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile : {annonces:[],blogs:[],city:[]},
        }
    }

    // lifecycle method
    componentDidMount() {
        let Username = this.props.match.params.username;
        dyaxios.get(route('api_profile.view',[Username])).then(response =>
                this.setState({
                    userProfile: response.data,
                }));
    }

    render() {
        const {userProfile} = this.state;
        let annonces = userProfile.annonces;
        let blogs = userProfile.blogs;
        const composantTitle = `${userProfile.name}`;
        document.title = `${composantTitle} | Kazoutech`;
        return (

            <div className="profile-page">
                <NavUserSIte/>
                <div className="wrapper">
                    <section className="section-profile-cover section-shaped my-0">
                            {userProfile.city_id ?
                            <img className="bg-image" src={userProfile.city.photo} style={{width: "100%"}}/>
                            :
                            <img className="bg-image" src="/assets/vendor_site/img/pages/mohamed.jpg" style={{width: "100%"}}/>
                            }
                            <div className="separator separator-bottom separator-skew">
                                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <polygon className="fill-secondary" points="2560 0 2560 100 0 100"/>
                                </svg>
                            </div>
                    </section>
                    <section className="section bg-secondary">
                        <div className="container">
                            <div className="card card-profile shadow mt--300">
                                <div className="px-4">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 order-lg-2">
                                            <div className="card-profile-image">
                                                <NavLink to={`/user/${userProfile.username}`}>
                                                    <img src={userProfile.avatar}
                                                         className="rounded-circle"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                            <div className="card-profile-actions py-4 mt-lg-0">
                                                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                                                {userProfile.status_profile_verify ?
                                                    <button type={'button'} className="btn btn-sm btn-success float-right">
                                                        <span className="btn-inner--icon"><i className="ni ni-check-bold"/></span>
                                                    </button>
                                                 :null}
                                                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-1">
                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Friends</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Photos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-5">
                                        <h3>{userProfile.name}<span className="font-weight-light">, 27</span></h3>
                                        {userProfile.city_id ?
                                            <div className="h6 font-weight-300">
                                                <i className="ni location_pin mr-2"/><b>{userProfile.city.name}</b>
                                            </div>
                                            :null}

                                        <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"/>Solution
                                            Manager - Creative Tim Officer
                                        </div>
                                        <div><i className="ni education_hat mr-2"/>University of Computer Science
                                        </div>
                                    </div>

                                    {annonces.length > 0 ?
                                        <div className="mt-5 py-5 border-top text-left">
                                            <div className="row">

                                                {annonces.map((item) => (
                                                    <ProfileSiteAnnonces key={item.id} {...item} />
                                                ))}

                                            </div>
                                        </div>
                                        :null}

                                    {blogs.length > 0 ?
                                        <div className="mt-5 py-5 border-top text-center">
                                            <div className="row justify-content-center">
                                                <div className="row">

                                                    {blogs.map((item) => (
                                                        <ProfileSiteBlogs key={item.id} {...item} />
                                                    ))}

                                                </div>

                                            </div>
                                        </div>
                                        :null}

                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterUserSite/>
                </div>
            </div>
        )
    }

}

export default ProfileSiteIndex;
