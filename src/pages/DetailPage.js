import React, { Component } from 'react'
import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import DetailImage from 'parts/DetailImage'
import DetailDescription from 'parts/DetailDescription'
import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import ItemDetails from 'json/itemDetails.json'



export default class DetailPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }
  render() {
    const breadcrumb = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
      ];
    return (
        <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <DetailImage data={ItemDetails.imageUrls} />
        <section className='container'>
            <div className="row">
                <div className="col-7 pr-5">
                    <DetailDescription data={ItemDetails}/>
                </div>
                <div className="col-5">
                    <BookingForm itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}/>
                </div>
            </div>

        </section>
        <Categories data={ItemDetails.categories}></Categories>
        </>
    )
  }
}
