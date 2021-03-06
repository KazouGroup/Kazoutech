import React, {Component} from "react";
import {Link} from "react-router-dom";


class CategoryOcupationHeader extends Component {


    render() {
        const url = `/occupations/${this.props.occupation.slug}/`;
        return (

            <div className="page-header page-header-mini header-filter">
                <div className="page-header-image" style={{backgroundImage: "url(" + this.props.photo + ")"}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <h2 className="display-2 text-white">{this.props.name}</h2>
                            <div className="author">
                                <Link to={url} className="text-white">
                                    <i className="fa fa-chevron-circle-left"/> Retour {this.props.occupation.name}
                                </Link>
                            </div>
                            <br />
                            <div className="text-white">
                                <span>Toutes les annonces <b style={{ textTransform: "lowercase" }}>{this.props.name}</b> au Cameroun</span>
                                <br />
                                <span>{this.props.annonces_count} {this.props.annonces_count > 1 ? "annonces" : "annonce"} <b style={{ textTransform: "lowercase" }}>{this.props.name}</b> au Cameroun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CategoryOcupationHeader;
