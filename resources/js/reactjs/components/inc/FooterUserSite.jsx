import React, { Component } from "react";
import {Link} from 'react-router-dom';


class FooterUserSite extends Component {

    render() {

        return (
            <footer className="footer footer-big bg-gradient-default">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="column">
                                    <Link to={'/'}>
                                        <img src=".." className="logo" alt="Kazoutech"/>
                                    </Link>
                                </div>
                                <div className="btn-wrapper profile text-left mt-3">
                                    <a target="_blank" href="https://twitter.com/creativetim" className="btn btn-sm"
                                       data-toggle="tooltip" data-original-title="Follow us">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a target="_blank" href="https://www.facebook.com/Kazoutech-Cameroun-102436558108851"
                                       className="btn btn-sm" data-toggle="tooltip" data-original-title="Like us">
                                        <i className="fab fa-facebook-square"/>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/kazoutech-cameroun/?viewAsMember=true"
                                       className="btn btn-sm" data-toggle="tooltip" data-original-title="Follow us">
                                        <i className="fab fa-linkedin-square"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2 col-6">
                                <div className="column">
                                    <h4 className="mt-3">Company</h4>
                                    <ul>
                                        <li>
                                            <Link to={'/about/'}>
                                                A Propos de Nous
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/concept/'}>
                                                Notre Concept
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/faqs/'}>
                                                FAQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/contacts/'}>
                                                Contacts
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-6">
                                <div className="column">
                                    <h4 className="mt-3">Services</h4>
                                    <ul>
                                        <li>
                                            <Link to={'/occupations/'}>
                                                Nos Categories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/annonces/'}>
                                                Annonces
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/charbonneurs/'}>
                                                Charbonneurs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/blog/'}>
                                                Blog
                                            </Link>
                                        </li>
                                        {/*
                                           <li>
                                            <Link to={'/temoignages/'}>
                                                Temoignages
                                            </Link>
                                        </li>
                                        */}

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="column">
                                    <h4 className="mt-3">Top Annonces</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Peinture Int??rieure
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Soudure Portails
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Menuis??rie Meubles
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Mecanicien de voitures
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-6">
                                <div className="column">
                                    <h4 className="mt-3">Top Villes</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Douala
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Yaound??
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Nkongsamba
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Kribi
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="kazouTech-divider"/>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="column">
                                    <nav>
                                        <ul>
                                            <li className="d-inline-block">
                                                <div className="copyright d-flex justify-content-center">
                                                    Copyright { new Date().getFullYear()}, Realized by
                                                    <div>
                                                        <a href="/" className="pl-2 text-primary">KazouGroup Srl</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-inline-block">
                                                <Link to={'/condition_utilisation/'} className="nav-link">
                                                    Terms &amp; Conditions
                                                </Link>
                                            </li>
                                            <li className="d-inline-block">
                                                <Link to={'/politique_confidentialit??/'} className="nav-link">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className="d-inline-block">
                                                <Link to={'/licence_site/'} className="nav-link">
                                                    Licence Site
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dropdown">
                                    Language:
                                    <div className="btn btn-link text-primary " role="button"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ni ni-chat-round"/>
                                        <span>Fran??ais</span>
                                    </div>
                                    <div className="dropdown-menu kazouTech-dropdown" x-placement="top-start">
                                        <a href="#" className="dropdown-item active">
                                            <span>Fran??ais</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span>English</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-description">
                                    Le charbon pour tous et par tous faite partit de la camunaut?? kazoutech et beneficiez du service ??
                                    la personne partout sur le teritoire. Le charbon n'a jamais ??t?? aussi facile et ?? la porter de tous(tes) alors
                                    venez et lancez vous et faite vous de L'argent tout en donnant le sourir au autres &#128525;.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterUserSite;
