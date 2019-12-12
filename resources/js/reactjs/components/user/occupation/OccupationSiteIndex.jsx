import React,{Component} from "react";
import {Link} from 'react-router-dom'
import FooterUserSite from "../../inc/FooterUserSite";
import NavUserSIte from "../../inc/NavUserSIte";
import OccupationList from "./OccupationList";


class OccupationSiteIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            occupations: [],
        }
    }

    // lifecycle method
    componentDidMount() {
        const composantTitle = 'Occupations et services à la persone : trouver un jobber facillement kazoutech';
        document.title = `${composantTitle} | Kaazoutech`;
        dyaxios.get(route('api_active.occupations')).then(response =>
            this.setState({
                occupations: [...response.data],
            }));

    }
    render() {
        let { occupations } = this.state;
        return(
            <>
                <NavUserSIte/>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="section-shaped my-0 skew-separator skew-mini">
                           <div className="page-header page-header-small header-filter">
                                <div className="page-header-image" style={{backgroundImage: "url(" + '/assets/vendor_site/img/pages/nathan-dumlao.jpg' + ")"}}>
                                </div>
                                <div className="container">
                                    <div className="header-body text-center mb-7">
                                        <div className="row justify-content-center">
                                            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                                <h1 className="text-white">Occupations </h1>
                                                <p className="text-lead text-white">Du service a la personne et du main
                                                    à main entre particuliers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center">
                            <div className="row mb-5">
                                <div className="col-md-8 mx-auto">
                                    <h3 className="display-3">Nos offres en quelque clicks choisissez votre
                                        categorie</h3>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                {occupations.map((item) => (
                                    <OccupationList key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="subscribe-line subscribe-line-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mr-auto">
                                    <h4 className="title">Restez a l'affue chaque semaine!</h4>
                                    <p className="description">
                                        Rejoigniez notre newsletter et ayez de nos nouvelle chaque semaine n ayez craint
                                        nous detestons aussi les spam
                                    </p>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-center flex-column ml-auto">
                                    <form method="" action="">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="form-group">
                                                    <div className="input-group mb-4">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-email-83"/></span>
                                                        </div>
                                                        <input className="form-control" placeholder="votre Email..."
                                                               type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-success btn-block">souscrivez
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterUserSite/>
                </div>
            </>
        )
    }
}
export default OccupationSiteIndex;
