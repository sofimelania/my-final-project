import Peace from '../assets/peace-ukraine-peace.jpg';

function Contact(){
    return(
        <div className="contact">
            <h1>Contact us</h1>
                <h3>We value your feedback and would love to hear from you. You can contact us by phone, email, or through our website's contact form.</h3>
                <h3>Phone: +1 (267) 123-4567</h3>
                <h3>Email: info@ukraine.com</h3>
                <h3>Don't hesitate to reach us out.We always happy to help!</h3>
                <h3>Thank you for your support!</h3>

                <div className="form">
            <img src={Peace}alt="peace"width="500px" height="500px"/>
            <form className='input'>
            <label for="name">Your name: </label>
                    <input type="text" placeholder="Your name:" required/>
                    <label for="email">Your email: </label>
                    <input type="email" placeholder="Your email:" required/>
                    <label for="phone">Your phone number: </label>
                    <input type="number" placeholder="Your phone number:"/>
                    <label for="comments">Your Comments: </label>
                    <textarea placeholder="Your Comments" required/>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
        </div>
    )
}
export default Contact;