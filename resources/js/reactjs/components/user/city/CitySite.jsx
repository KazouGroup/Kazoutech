import React, {Component} from "react";
import {Link} from "react-router-dom";
import LazyLoad from 'react-lazyload';


class CitySite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        dyaxios.get(route('api.annoncesbycities')).then(response =>
            this.setState({
                cities: [...response.data],
            }));
    }


    render() {
        const {cities} = this.state;
        return (
            <div className="row mb-5">
                {cities.map((item) => (
                    <div key={item.id} className="col-sm-2 col-6 kazouTech-cities" data-animation="zooming">
                        <small
                            className="d-block text-uppercase font-weight-bold mb-4 text-center">
                            <b>{item.name}</b>
                        </small>
                        <LazyLoad>
                            <a href="#">
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="img-fluid rounded shadow"
                                />
                            </a>
                        </LazyLoad>
                    </div>
                ))}
            </div>
        )
    }
}

export default CitySite;
