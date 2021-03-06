import React, {Component} from "react";
import FooterUserSite from "../../inc/FooterUserSite";
import NavUserSIte from "../../inc/NavUserSIte";
import FaqUserList from "./FaqUserList";


class FaqSiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: [],
        }
    }

    // lifecycle method
    componentDidMount() {
        const composantTitle = 'FAQS | Kazoutech';
        document.title = `${composantTitle}`;

        dyaxios.get(route('api_active.faqs')).then(response =>
            this.setState({
                faqs: [...response.data],
            }));
    }

    render() {
        const {faqs} = this.state;
        return (
            <div className="landing-page">
                <NavUserSIte/>

                <div className="wrapper">
                    <div className="page-header page-header-mini header-filter">
                        <div className="page-header-image page-header-mini"
                             style={{backgroundImage: "url(" + '/assets/vendor_site/img/pages/nathan-dumlao.jpg' + ")"}}/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto text-center">
                                    <h2 className="display-2 text-white">Foire Aux Questions (FAQs)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cd-section" id="accordion">
                        <div className="accordion-1">
                            <div className="container">

                                <div className={'row'}>
                                    <div className="col-md-12 ml-auto">
                                        <div className="accordion" id="accordionFaqs">
                                            {faqs.map((item) => (
                                                <FaqUserList key={item.id} {...item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <FooterUserSite/>
            </div>
        )
    }

}

export default FaqSiteIndex;
