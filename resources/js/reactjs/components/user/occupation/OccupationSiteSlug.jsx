import React, {Component} from "react";
import {Link} from "react-router-dom";
import NavUserSIte from "../../inc/NavUserSIte";
import FooterUserSite from "../../inc/FooterUserSite";
import OccupationHeader from "../../inc/OccupationHeader";
import CategoryOcupationList from "./categoryoccupation/CategoryOcupationList";
import OccupationList from "./OccupationList";
import CitySite from "../city/CitySite";


class OccupationSiteSlug extends Component {

    constructor(props) {
        super(props);
        this.state = {
            occupation: {categoryoccupations: [],blogs:[]},
        }
    }

    // lifecycle method
    componentDidMount() {
        let itemOccupation = this.props.match.params.occupation;
        let url = route('occupations.view', itemOccupation);
        dyaxios.get(url).then(response => this.setState({occupation: response.data,}));
    }

    render() {
        const {occupation} = this.state;
        const occupationCategories = occupation.categoryoccupations;
        const composantTitle = `${occupation.name}`;
        document.title = `${composantTitle} | Kaazoutech`;

        return (
            <>
                <div className="landing-page">
                    <NavUserSIte/>

                    <div className="wrapper">
                        <OccupationHeader {...occupation}/>
                        <div className="cd-section" id="accordion">
                            <div className="accordion-1">
                                <div className="container">

                                    <div className={'row'}>

                                        <div className="container text-center">
                                            <div className="row mb-5">
                                                <div className="col-md-8 mx-auto">
                                                    <h3 className="display-3">Nos offres en quelque clicks choisissez
                                                        votre
                                                        categorie</h3>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                {occupationCategories.map((item) => (
                                                    <CategoryOcupationList key={item.id} {...item}/>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="section features-7">
                                        <div className="container">
                                            <div className="row justify-content-center mt-5">
                                                <div className="col-lg-12">

                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-8 mr-auto ml-auto text-center">
                                                                <h3 className="title mb-5">Nous sommes plus proche de
                                                                    vous !</h3>
                                                            </div>
                                                        </div>
                                                        <CitySite/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mx-auto">
                                            <div dangerouslySetInnerHTML={{__html: occupation.description}}/>
                                        </div>
                                    </div>
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

export default OccupationSiteSlug;
