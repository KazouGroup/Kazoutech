import React, {Component} from "react";
import FooterUserSite from "../../inc/FooterUserSite";
import NavUserSIte from "../../inc/NavUserSIte";
import AnnonceList from "./AnnonceList";
import {Link, NavLink} from "react-router-dom";
import AnnonceOccupationList from "./AnnonceOccupationList";
import moment from "moment";
import {Button} from "reactstrap";


class AnnonceSiteByOccupationbyCategoryoccupation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annoncebycategoryoccupation: {annonces:[]},
            cities:[],
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    // handle delete
    deleteItem(id) {
        Swal.fire({
            title: 'Etes vous sure de vouloir suprimer cette annonce?',
            animation: false,
            customClass: 'animated shake',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success btn-sm",
            cancelButtonClass: 'btn btn-danger btn-sm',
            confirmButtonText: 'Oui suprimer',
            cancelButtonText: 'No annuler',
            showCancelButton: true,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

                const url = route('annonces.destroy',id);
                //Envoyer la requet au server
                dyaxios.delete(url).then(() => {

                    //Redirect after create
                    this.props.history.push('/annonces/');
                    /** Alert notify bootstrapp **/
                    $.notify({
                            // title: 'Update FAQ',
                            message: 'Annonce suprimée avec success'
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
    // lifecycle method
    componentDidMount() {
        let SlugCategoryoccupation = this.props.match.params.catagoryoccupation;
        let SlugOccupation = this.props.match.params.occupation;
        dyaxios.get(route('api_annonce_occupation_categoryoccupation_site.view',[SlugOccupation,SlugCategoryoccupation]))
            .then(response =>
                this.setState({
                    annoncebycategoryoccupation: response.data,
                }));
        dyaxios.get(route('api.cities_by_vip')).then(response =>
            this.setState({
                cities: [...response.data],
            }));
    }

    render() {
        const {annoncebycategoryoccupation,cities} = this.state;
        const annoncebycategoryoccupations = annoncebycategoryoccupation.annonces;
        const composantTitle = `${annoncebycategoryoccupation.name}`;
        document.title = `Annonce de ${composantTitle} | Kazoutech`;
        let SlugOccupation = this.props.match.params.occupation;
        let SlugCategoryoccupation = this.props.match.params.catagoryoccupation;
        return (
            <div className="blog-post">
                <NavUserSIte/>
                <div className="wrapper">
                    <div className="page-header page-header-mini header-filter">
                        <div className="page-header-image"
                             style={{backgroundImage: "url(" + annoncebycategoryoccupation.photo + ")"}}/>
                        <div className="content-center">
                            <div className="row">
                                <div className="col-md-6 mx-auto text-center">
                                    <h4 className="title text-white">
                                        Restez à l'affût de toutes les annonces sur <b>{annoncebycategoryoccupation.name}</b>
                                    </h4>
                                    <div className="author">
                                        <Link to={`/annonces/${SlugOccupation}/`} className="text-white">
                                            <i className="fa fa-chevron-circle-left"/> Retour Annonces
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="main main-raised">

                        <div className="container">
                            <div className="row">


                            </div>
                        </div>
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ml-auto mr-auto">
                                        <section className="blogs-3">
                                            <div className="container">
                                                <br/>
                                                <div className="row">

                                                    <div className="col-md-4">
                                                        <AnnonceOccupationList/>

                                                        <div className="card mb-3">
                                                            <div className="card-header h6">Villes</div>
                                                            <div className="card-body">
                                                                <ul className="list-unstyled">

                                                                    {cities.map((item) => (
                                                                        <li key={item.id} className="mb-2">
                                                                            <Link to={`/annonces/${SlugOccupation}/${annoncebycategoryoccupation.slug}/${item.slug}/`}>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}

                                                                    <li className="mb-2">
                                                                        <Link to={`/all_cities/`} >
                                                                          Autre ville...
                                                                        </Link>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-8 col-md-10 mx-auto">
                                                        <h5 className="display-3 mb-5"><b>Toutes les annonces de {annoncebycategoryoccupation.name}</b></h5>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="card mb-3 text-center">
                                                                    <div className="card-body"><p
                                                                        className="h5 font-weight-normal mb-3 text-success">Vous avez une annonce?</p>
                                                                        <Link to={`/annonces/${SlugOccupation}/new/create/`} className="btn btn-success mb-2"
                                                                              type="button" disabled="">
                                                                            <span
                                                                                className="spinner-grow spinner-grow-sm"
                                                                                role="status" aria-hidden="true"/>
                                                                            Annonce
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="card mb-3 text-center">
                                                                    <div className="card-body"><p
                                                                        className="h5 font-weight-normal mb-3 text-primary">Envie
                                                                        de charbonner ?</p><a
                                                                        className="btn btn-primary btn-break"
                                                                        href="/devenez_charbonneur">Devenir
                                                                        Charbonneur</a></div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="card">
                                                            <div className="card-body">
                                                                {annoncebycategoryoccupations.map((item) => (
                                                                    <div key={item.id}
                                                                         className="card card-blog card-plain blog-horizontal mb-5">
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <h5 className="card-title">
                                                                                    <Link to={`/annonces/${SlugOccupation}/${SlugCategoryoccupation}/${item.city.slug}/${item.slug}/`}>
                                                                                        {item.title}
                                                                                    </Link>
                                                                                </h5>
                                                                                <p className="card-description">
                                                                                    <b dangerouslySetInnerHTML={{ __html: (item.body.length > 156 ? item.body.substring(0, 156) + "..." : item.body) }} />
                                                                                    <Link to={`/annonces/${SlugOccupation}/${SlugCategoryoccupation}/${item.city.slug}/${item.slug}/`}> lire la suite </Link>
                                                                                </p>
                                                                                <div className="card-header d-flex align-items-center">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <NavLink to={`/user/${item.user.username}/`}>
                                                                                            <img src={item.user.avatar} alt={item.user.name} className="avatar" />
                                                                                        </NavLink>
                                                                                        <div className="mx-3">
                                                                                            <NavLink to={`/user/${item.user.username}/`} className="text-dark font-weight-600 text-sm">{item.user.name}</NavLink>
                                                                                            <small className="d-block text-muted">{moment(item.created_at).fromNow()}</small>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="text-right ml-auto">
                                                                                        {item.price ?
                                                                                            <button type="button" className={`btn btn-sm btn-${item.user.color_name} btn-icon`}>
                                                                                                <span className="btn-inner--text">{item.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} FCFA</span>
                                                                                            </button>
                                                                                            : null}

                                                                                        {!$guest ?
                                                                                            <>
                                                                                                {$userKazou.id === item.user_id ?
                                                                                                    <>
                                                                                                    <NavLink to={`/annonces/${SlugOccupation}/p/annonce/${item.id}/edit`} className="btn btn-sm btn-success btn-icon">
                                                                                                            <span className="btn-inner--icon icon-big">
                                                                                                                <i className="ni ni-check-bold" />
                                                                                                            </span>
                                                                                                        <span className="btn-inner--text">editer</span>
                                                                                                    </NavLink>
                                                                                                    <Button onClick={() => this.deleteItem(item.id)}
                                                                                                            className="btn btn-sm btn-danger btn-icon">
                                                                                                                <span className="btn-inner--icon icon-big">
                                                                                                                    <i className="ni ni-fat-remove" />
                                                                                                                </span>
                                                                                                        <span className="btn-inner--text">Suprimer</span>
                                                                                                    </Button>{" "}
                                                                                                    </>
                                                                                                    :null}
                                                                                            </>
                                                                                            :null}
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </section>


                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                    <FooterUserSite/>
                </div>
            </div>
        )
    }

}

export default AnnonceSiteByOccupationbyCategoryoccupation;