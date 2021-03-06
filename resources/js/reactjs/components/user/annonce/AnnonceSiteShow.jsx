import React, { Component, Fragment } from "react";
import { Helmet } from 'react-helmet';
import { Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import NavUserSIte from "../../inc/NavUserSIte";
import FooterUserSite from "../../inc/FooterUserSite";
import moment from 'moment'
import ReadMoreAndLess from 'react-read-more-less';
import Skeleton from "react-loading-skeleton";
import AnnoncePostInteresse from "./AnnoncePostInteresse"

require("moment/min/locales.min");
moment.locale('fr');

require("moment/min/locales.min");
moment.locale('fr');

class AnnonceSiteShow extends Component {
    constructor(props) {
        super(props);


        this.deleteItem = this.deleteItem.bind(this);
        this.loginItem = this.loginItem.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            remember: true,
            errors: [],

            annonceinteressebycategoryoccupation: { annoncesinteres: [] },
            annonce: { user: [], occupation: [], city: [] },
            charbonneurs: { userbycities: [] }
        };
    }
    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        this.state.errors[event.target.name] = '';
    }
    // Handle Errors
    hasErrorFor(field) {
        return !!this.state.errors[field];
    }
    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }
    loadItems() {
        let SlugItem = this.props.match.params.annonce;
        let SlugOccupation = this.props.match.params.occupation;
        let SlugCategoryoccupation = this.props.match.params.catagoryoccupation;
        let SlugCity = this.props.match.params.city;
        /**
         * Ici je recupere l'annonce pour l'afficer
         */
        let url = route('api_annonce_site.view', [SlugOccupation, SlugCategoryoccupation, SlugCity, SlugItem]);
        dyaxios.get(url).then(response => this.setState({ annonce: response.data, }));
        /**
         * Ici je recupere touts les annonces par categoryoccupation pour proposer
         */
        let urlinteress = route('api_annonce_occupation_categoryoccupation_site.view', [SlugOccupation, SlugCategoryoccupation]);
        dyaxios.get(urlinteress).then(response => this.setState({ annonceinteressebycategoryoccupation: response.data, }));
        let urluser = route('api_active_charbonneurs_occupation_city.view', [SlugOccupation, SlugCity]);
        dyaxios.get(urluser).then(response => this.setState({ charbonneurs: response.data, }));
    }
    componentDidMount() {
        this.loadItems();
    }

    /** Ici nous les utilisateurs active leurs posts **/
    likeItem(annonce) {
        //let SlugOccupation = this.props.match.params.occupation;
        //Start Progress bar
        dyaxios.get(route('annonces_site.like', [annonce.occupation.slug, annonce.id]))
            .then(() => {
                this.loadItems();

            }).catch(() => {
                //Failled message
                $.notify("Ooopss! Une erreur est survenue", {
                    allow_dismiss: false,
                    type: 'danger',
                    animate: {
                        enter: 'animated bounceInDown',
                        exit: 'animated bounceOutUp'
                    }
                });
            });
    }
    loginItem(e) {
        e.preventDefault();

        let item = {
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember,
        };
        dyaxios.post(route('login'), item)
            .then(() => {
                //Masquer le modal apr??s la connexion
                $('#loginModal').modal('hide');
                window.location.reload();
            }).catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
                $.notify("Ooopss! Quelque chose ne va pas. Essayer plus tard...", {
                    allow_dismiss: false,
                    type: 'danger',
                    animate: {
                        enter: 'animated bounceInDown',
                        exit: 'animated bounceOutUp'
                    }
                });
            })
    }


    deleteItem(id) {
        Swal.fire({
            title: 'Etes vous sure de vouloir supprimer cette annonce?',
            animation: false,
            customClass: 'animated shake',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success btn-sm",
            cancelButtonClass: 'btn btn-danger btn-sm',
            confirmButtonText: 'Oui supprimer',
            cancelButtonText: 'Non annuler',
            showCancelButton: true,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

                const url = route('annonces.destroy', id);
                //Envoyer la requet au server
                dyaxios.delete(url).then(() => {

                    //Redirect after create
                    this.props.history.push('/annonces/');
                    /** Alert notify bootstrapp **/
                    $.notify({
                        // title: 'Update FAQ',
                        message: 'Annonce supprim??e avec succ??s'
                    },
                        {
                            allow_dismiss: false,
                            type: 'primary',
                            placement: {
                                from: 'bottom',
                                align: 'right'
                            },
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            },
                        });
                    /** End alert ***/
                }).catch(() => {
                    //Failled message
                    $.notify("Ooopss! Une erreur est survenue", {
                        allow_dismiss: false,
                        type: 'danger',
                        animate: {
                            enter: 'animated bounceInDown',
                            exit: 'animated bounceOutUp'
                        }
                    });
                })
            }
        });
    }



    render() {
        const { annonce, annonceinteressebycategoryoccupation, charbonneurs } = this.state;
        const annoncebycategoryoccupations = annonceinteressebycategoryoccupation.annoncesinteres;
        return (
            <>
              <Helmet title={`${annonce.title || "Kazoutech"} | Kazoutech`}/>
               <div className="landing-page">
                <NavUserSIte />

                <div className="wrapper">
                    <div className="page-header page-header-mini header-filter">
                        <div className="page-header-image"
                            style={{ backgroundImage: "url(" + '/assets/vendor_site/img/pages/photo-15.jpg' + ")" }} />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto text-center">
                                    <h4 className="title text-white">
                                        {annonce.title || <Skeleton width={300} />}
                                    </h4>
                                    <div className="author">

                                        <Link to={`/annonces/`} className="text-white">
                                            <i className="fa fa-chevron-circle-left" /> <b>Retour au annonces </b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="main main-raised">
                        <div className="container">
                            <br />
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="h3 mb-0">{annonce.title || <Skeleton />}</h5>
                                        </div>
                                        <div className="card-header d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                {annonce.user.username ?
                                                    <>
                                                        <NavLink to={`/charbonneur/${annonce.user.username}/`}>
                                                            <img src={annonce.user.avatar} alt={annonce.user.name}
                                                                className="avatar" />
                                                        </NavLink>
                                                        <div className="mx-3">
                                                            <NavLink to={`/charbonneur/${annonce.user.username}/`}
                                                                className="text-dark font-weight-600 text-sm">{annonce.user.name}</NavLink>
                                                            <small className="d-block text-muted">{moment(annonce.created_at).fromNow()}</small>
                                                        </div>
                                                    </>
                                                    :
                                                    <Skeleton circle={true} height={60} width={60} />
                                                }


                                            </div>
                                            <div className="text-right ml-auto">
                                                {/*
                                                  <span className="badge badge-primary">{annonce.visits} vues</span>
                                                */}
                                                {annonce.price && (
                                                    <button type="button" className={`btn btn-sm btn-${annonce.user.color_name} btn-icon`}>
                                                        <span className="btn-inner--text">{annonce.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} FCFA</span>
                                                    </button>)}

                                                {!$guest && (
                                                    <>
                                                        {$userKazou.my_status === 'active' && (
                                                            <>
                                                                <a target="_blank" href={`/dashboard/annonces/tasks/${annonce.occupation.slug}/${annonce.city.slug}/${annonce.slug}/assigned/`} className="btn btn-sm btn-info btn-icon">
                                                                    <span className="btn-inner--text">Assigner la t??che</span>
                                                                </a>
                                                            </>
                                                        )}
                                                        {$userKazou.id === annonce.user_id && (
                                                            <>
                                                                <NavLink
                                                                    to={`/annonces/${annonce.occupation.slug}/p/annonce/${annonce.id}/edit`}
                                                                    className="btn btn-sm btn-success btn-icon">
                                                                    <span className="btn-inner--icon icon-big">
                                                                        <i className="ni ni-check-bold" />
                                                                    </span>
                                                                    <span className="btn-inner--text">Editer</span>
                                                                </NavLink>
                                                                <Button onClick={() => this.deleteItem(annonce.id)}
                                                                    className="btn btn-sm btn-danger btn-icon">
                                                                    <span className="btn-inner--icon icon-big">
                                                                        <i className="ni ni-fat-remove" />
                                                                    </span>
                                                                    <span className="btn-inner--text">Supprimer</span>
                                                                </Button>{" "}
                                                            </>
                                                        )}

                                                    </>
                                                )}

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-4">
                                                {annonce.body ?
                                                    <b dangerouslySetInnerHTML={{ __html: (annonce.body) }} />
                                                    :
                                                    <Skeleton count={3} />
                                                }
                                            </p>
                                            {annonce.photo !== null ?
                                                <img alt={annonce.photo} src={annonce.photo}
                                                    className="img-fluid rounded" />
                                                : null}

                                            {/*     <div className="row align-items-center my-3 pb-3 border-bottom">
                                                <div className="col-sm-6">
                                                    <div className="icon-actions">
                                                        {$guest ?
                                                            <a href="#"  className="like" data-toggle="modal" data-target="#loginModal">
                                                                <i className="ni ni-like-2"/>
                                                                <span className="text-muted">{annonce.likers} j'aime</span>
                                                            </a>
                                                            :
                                                            <a style={{cursor: "pointer"}}  onClick={() => this.likeItem(annonce)} className={`like active`}>
                                                                <i className="ni ni-like-2"/>
                                                                <span className="text-muted">{annonce.likers} j'aime</span>
                                                            </a>
                                                        }
                                                    </div>
                                                </div>
                                            </div>*/}

                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-4 ">
                                    <div className="container">


                                        {/**<div className="submit text-center">
                                            <Link
                                                to={`/annonces/${annonce.occupation.slug}/p/annonce/new/create/`}
                                                className="btn btn-primary"
                                                type="button">
                                                    Demander un service
                                            </Link>
                                        </div> */}

                                        <br />


                                        <div className="card">


                                            {charbonneurs.userbycities.map((item) => (
                                                
                                                <Fragment key={item.id}>
                                                    <div className="card-header d-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <NavLink to={`/charbonneur/${item.username}/`}>
                                                                <img src={item.avatar} alt={item.name || ""}
                                                                    className="avatar" />
                                                            </NavLink>
                                                            <div className="mx-3">
                                                                <Link to={`/charbonneur/${item.username}/`}
                                                                    className="text-dark font-weight-600 text-sm">{item.name || ""}</Link>
                                                                <small className="d-block text-muted">{moment(item.created_at).fromNow()}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="text-justify">
                                                            <ReadMoreAndLess
                                                                className="read-more-content"
                                                                charLimit={50}
                                                                readMoreText="En savoir plus"
                                                                readLessText="En savoir moin">
                                                                {item.profile.body || ""}
                                                            </ReadMoreAndLess>
                                                        </div>
                                                        <br />
                                                        <Link to={`/charbonneur/${item.username}/`} className="btn btn-sm btn-info btn-block">Contacter</Link>
                                                    </div>
                                                </Fragment>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="card bg-secondary shadow border-0 mb-0">
                                    <div className="card-header bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <small>Se connecter avec</small>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <a href=".." className="btn btn-neutral btn-icon">
                                                <span className="btn-inner--icon">
                                                    <img src="/assets/site/assets/img/icons/common/github.svg" />
                                                </span>
                                                <span className="btn-inner--text">Google</span>
                                            </a>
                                            <a href=".." className="btn btn-neutral btn-icon">
                                                <span className="btn-inner--icon">
                                                    <img src="/assets/site/assets/img/icons/common/google.svg" />
                                                </span>
                                                <span className="btn-inner--text">Github</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Ou connectez-vous avec vos identifiants</small>
                                        </div>
                                        <form method="POST" onSubmit={this.loginItem}>

                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="ni ni-email-83" />
                                                        </span>
                                                    </div>

                                                    <input type="text" placeholder="Pseudo ou votre numero de t??l??phone" aria-label="Pseudo ou votre numero de t??l??phone"
                                                        required="required"
                                                        id="username"
                                                        className={`form-control ${this.hasErrorFor('username') ? 'is-invalid' : ''}`}
                                                        name='username'
                                                        value={this.state.username}
                                                        onChange={this.handleFieldChange} autoComplete="username" autoFocus />
                                                    {this.renderErrorFor('username')}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="ni ni-lock-circle-open" />
                                                        </span>
                                                    </div>

                                                    <input type="password" placeholder="Mot de passe" aria-label="Mot de passe"
                                                        required="required"
                                                        id="password"
                                                        className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
                                                        name='password'
                                                        value={this.state.password}
                                                        onChange={this.handleFieldChange}
                                                        autoComplete="password" autoFocus />
                                                    {this.renderErrorFor('password')}
                                                </div>
                                            </div>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id="remember" type="checkbox"
                                                    defaultChecked={this.state.remember} value={this.state.remember} name="remember" onChange={this.handleFieldChange} />
                                                <label className="custom-control-label" htmlFor="remember">
                                                    <span>Se souvenir de moi</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary my-4">Se connecter</button>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <a className="text-light" href="/password/reset/">
                                                        <small>Mot de passe oubli??</small>
                                                    </a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a href="/register/" className="text-light">
                                                        <small>Inscrivez vous</small>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterUserSite />
            </div>

            </>
        )
    }

}

export default AnnonceSiteShow;
