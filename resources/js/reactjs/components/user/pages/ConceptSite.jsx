import React, { Component } from "react";
import FooterUserSite from "../../inc/FooterUserSite";
import NavUserSIte from "../../inc/NavUserSIte";
import SubscribeLine from "../SubscribeLine";


class ConceptSite extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // lifecycle method
    componentDidMount() {
        const composantTitle = 'Concept';
        document.title = `${composantTitle} | Kazoutech`;
    }

    render() {
        return (
            <>
                <div className="about-us">
                    <NavUserSIte />
                    <div className="wrapper">
                        <div className="page-header page-header-mini header-filter">
                            <div className="page-header-image" style={{backgroundImage: "url(" + '/assets/vendor_site/img/sections/broofoac.jpg' + ")"}}/>
                        </div>
                        <div className="section features features-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 text-center mx-auto">
                                        <h3 className="display-2">Notre concept</h3>
                                        <p className="lead">La capacité de faire confiance a des gens rencontrer sur le net est un atout quon aquiet avec le temp.</p>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-12 mt-md-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="info">
                                                    <div className="pr-md-5">
                                                        <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4">
                                                            <i className="ni ni-atom"></i>
                                                        </div>
                                                        <h5 className="display-5">Confidentialité et sécurité</h5>
                                                        <p>La confaince est à la base même de notre bussiness plan.</p>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Collaborateurs controller et confirmer</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Tâches suivit du debut à la fin</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Obbligations du respect des consignes de sécurité</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="info">
                                                    <div className="pr-md-5">
                                                        <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4">
                                                            <i className="ni ni-money-coins"></i>
                                                        </div>
                                                        <h5 className="display-5">Meilleur prix</h5>
                                                        <p>Une fois le Collaborateur mis en relation, le devis de la tâche est decider entre deux</p>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Une rémuneration juste selon le marché</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Des services selon votre bourse</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Et des avantages selon votre activité sur le site</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-md-6">
                                                <div className="info">
                                                    <div className="pr-md-5">
                                                        <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4">
                                                            <i className="ni ni-support-16"></i>
                                                        </div>
                                                        <h5 className="display-5">Sponsor</h5>
                                                        <p>Des sponsors, mécenes et tuteurs reconnu pour booster le services et toujours apporter le meilleur</p>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Beautiful elements</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Amazing page examples</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Super friendly support team</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="info">
                                                    <div className="pr-md-5">
                                                        <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4">
                                                            <i className="ni ni-laptop"></i>
                                                        </div>
                                                        <h5 className="display-5">Meilleur services</h5>
                                                        <p>Le jobbing jamais aussi facile et jamais aussi utile.</p>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Des Collaborateurs évalués et identifiés</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Des utilisateurs comblés et heureux</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="kazouTech-red-color">
                                                                        <div className="mr-3">
                                                                            <i className="ni ni-check-bold"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0">Un avenir du jobbing meilleur en Afrique</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section features-3 my-5" style={{ backgroundImage: "url(" + '/assets/vendor_site/img/ill/p31.svg' + ")" }}>
                                <div className="container">
                                    <div className="row text-center justify-content-center">
                                        <div className="col-lg-10">
                                            <h3 className="display-3 text-white">Quelques conseils jobbing<span className="text-success">Pour Collaborateurs (Jobbeurs)</span></h3>
                                            <p className="lead text-white">Le jobbing n'as jamais été facile mais pour vous apportez le meilleurs des services et assurez votre sécurité et integrité,
                                                voici quelques conseils pratique.</p>
                                        </div>
                                    </div>
                                    <div className="row row-grid mt-5">
                                        <div className="col-lg-6">
                                            <div className="info info-horizontal bg-white">
                                                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                                                    <i className="ni ni-hat-3 text-info"></i>
                                                </div>
                                                <div className="description pl-4">
                                                    <h5 className="text-info">Respect de l'heure</h5>
                                                    <p>Honorer toujours à vos rendez-vous en arrivant a l'heure chez votre clients et fixer préalablement avec se dernier toutes les tâches à accomplir et a la fin vérifiez bien qu'elles ont été
                                                        accomplis comme il le fallait pour éviter des mal-entendu car cela fait partie du professionalisme.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="info info-horizontal bg-white">
                                                <div className="icon icon-shape icon-shape-warning rounded-circle text-white">
                                                    <i className="ni ni-istanbul text-warning"></i>
                                                </div>
                                                <div className="description pl-4">
                                                    <h5 className="text-warning">Equipement</h5>
                                                    <p>votre équipement fait parti de l'extension de votre talent donc n'hesitez pas de toujours vous munir du meilleur materiel pour chaque tâche sans oublier votre équipement de sécurité
                                                        pour faciliter votre travail et vous permettre de rester en forme pour votre prochain job.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-grid">
                                        <div className="col-lg-6">
                                            <div className="info info-horizontal bg-white">
                                                <div className="icon icon-shape icon-shape-danger rounded-circle text-white">
                                                    <i className="ni ni-trophy text-danger"></i>
                                                </div>
                                                <div className="description pl-4">
                                                    <h5 className="text-danger">Rémuneration</h5>
                                                    <p>Assurez-vous que la rémuneration établit avec votre client sois claire pour éviter des malentendu après le travail accompli. En cas d'heure supplementaire définissez avec votre client ce qui vous revient de droit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="info info-horizontal bg-white">
                                                <div className="icon icon-shape icon-shape-success rounded-circle text-white">
                                                    <i className="ni ni-image text-success"></i>
                                                </div>
                                                <div className="description pl-4">
                                                    <h5 className="text-success">Réalisation</h5>
                                                    <p>Offrez toujours le meilleur de vos service pendant vos jobs cela boostera votre notorieté à la fois sur la plateforme et sur le marché du jobbing. N'oubliez pas de nettoyer
                                                         votre site aprés le job accompli et de demander à votre client de vous évaluez sur le site pour booster votre profile.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SubscribeLine/>
                        <FooterUserSite />
                    </div>
                </div>
            </>
        )
    }
}

export default ConceptSite;
