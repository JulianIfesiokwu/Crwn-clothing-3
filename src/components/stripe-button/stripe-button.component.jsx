import React from "react";
import {Elements, CardNumberElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const stripePromise = loadStripe('pk_test_51JWh1RED7kYgRlFEOjNfCbzuIbwlUn1heCM2mMENgXIpuzq3mi6KNP6zNVj7JRZkjW6QxNCGWlC8DBEZdevRItSh00bEPH2ZQw');

    return (
        <Elements
        stripe={stripePromise}
        label='Pay Now'
        name='CRWN clothing-3'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLable='Pay Now'      
        >
            <CardNumberElement/>
        </Elements>
    );

};

export default StripeCheckoutButton;


