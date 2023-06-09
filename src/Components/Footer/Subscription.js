import React, {useState, useEffect} from "react";
import '../../CSS/layout/forms.scss'

const Subscription = ({onSubmit}) => {
    //Saves email input value
    const [email, setEmail] = useState('');
    //Saves email validation status - boolean
    const [emailValidation, setEmailValidation] = useState(false);
  
    //when email value changes, it sets emailValidation
    useEffect(()=>{
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(email.length > 0){
        setEmailValidation(regexEmail.test(email));
      }else{
        setEmailValidation(true);
      }
    }, [email, emailValidation]);

    //Saves area input value
    const [area, setArea] = useState('any');

    //Callback funtion to submit the form if all validation passes
    const submitHandler = (event)=>{
        event.preventDefault();
        if(emailValidation && email.length > 0 && area.length > 0){
            onSubmit();
        }
    }
    //Returns subscription form
    return (
		<div className="Wrapper">
                <section id="Subscription">
                    <h2>Subscribe to news letters</h2>
                    <form id="SubscribeForm"  onSubmit={submitHandler}>
                            <div id ="AlertSub" className="Alert" data-testid="alert">
                            {(!emailValidation || email.length <= 0 || area.length <= 0) && (
                            <ul id="AlertListSub">
                                {!emailValidation && (
                                    <li key="subEmail">Please enter valid email adress.</li>
                                )}
                                {email.length <= 0 && (
                                    <li key="subMandatory">Email adress is required.</li>
                                )}
                                {area.length <= 0 && (
                                    <li key="subArea">Please select area.</li>
                                )}
                            </ul>
                            )}
                        </div>
                        <div className="SubemailWrapper">
                            <label htmlFor="subemail">Email (mandatory): </label>
                            <input type="email"
                                id="submail"
                                name="subemail"
                                data-testid="email"
                                aria-label="submail"
                                placeholder="abc@braveblossoms.com.au"
                                onChange={(event)=>setEmail(event.target.value)}
                                required/>
                        </div>
                        <div className="AreaWrapper">
                            <label htmlFor="area" className="Dropdown">Areas: </label>
                            <select
                                name="area"
                                defaultValue="any"
                                onChange={(event)=>setArea(event.target.value)}>
                                <option type="checkbox" value="any" aria-label="any">Any</option>
                                <option type="checkbox" value="hokkaido" aria-label="hokkaido">Hokkaido</option>
                                <option type="checkbox" value="tohoku" aria-label="tohoku">Tohoku</option>
                                <option type="checkbox" value="tohoku" aria-label="kanto">Kanto</option>
                                <option type="checkbox" value="tokai" aria-label="tokai">Tokai</option>
                                <option type="checkbox" value="kansai" aria-label="kansai">Kansai</option>
                                <option type="checkbox" value="shikoku" aria-label="shikoku">Shikoku</option>
                                <option type="checkbox" value="kyushu" aria-label="kyushu">Kyushu</option>
                                <option type="checkbox" value="okinawa" aria-label="Okinawa">Okinawa</option>
                            </select>
                        </div>
                        <div class="SubmitWrapper">
                            <input type="submit" id="SubscribeSubmit" value="Follow Brave Blossoms!" aria-label="submit" data-testid="submit"/>
                        </div>
                    </form>
                </section>
            </div>
    );
};

export default Subscription;
