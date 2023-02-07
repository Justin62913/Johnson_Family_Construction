import React, {useRef} from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import emailjs from '@emailjs/browser';
/*import GoogleMapReact from 'google-map-react';*/



// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {


    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_103cpja', 'template_j7dz6o6', form.current, 'bKWO0MAEW9rB1HkRq')
      .then((result) => {
          console.log(result.text);
          e.target.reset()

      }, (error) => {
          console.log(error.text);
      });
  };








        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Putting a plan to action, to assure your satisfaction!" pagename="Contact Us" />
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form"  onSubmit={sendEmail} ref={form}>
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Get</span> In touch</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button  name="submit" type="submit" value="Submit" className="site-button btn-effect">submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                        <p>(406) 274 4630</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <p>johnsonfconstruction@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>4377 Illinois Bench Rd, Stevensville Mt 59870</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />
            </>
        );

};

export default ContactUs;