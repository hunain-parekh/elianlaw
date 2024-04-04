import {loadStripe} from '@stripe/stripe-js';
export async function checkout({lineItems,mode}){
    let stripePromise = null;
    let getStripe=()=>{
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);
        }
        return stripePromise
    }
    
    const stripe =await getStripe();
    await stripe.redirectToCheckout({
        mode:mode ? mode : "payment",
        lineItems,
        successUrl:window.location.origin,
        cancelUrl:window.location.origin
    })
}