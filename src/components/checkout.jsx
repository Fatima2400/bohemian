import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";



 export const Checkout = () => {
    const [price, setPrice]= useState(0)
    const state = useSelector((state)=>state.Cart)
    console.log("sate",state)
    useEffect(()=>{
        tot()
    },[])
    
    const tot=()=>{
        var sum = 0
            if(state.length>0){
                for(let i=0;i<state.length;i++){
               
                    let x =  state[i].price
                    let y =  state[i].qty
                    sum += +x * y ;
                    
                    setPrice(sum)
                   }
            }else{
                setPrice(0)
            }
    }
   
   
    
    const itemList=(item)=>{
        
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.title}</h6>
            </div>
            <span className="text-muted">₹{item.price} <b>({item.qty}) </b></span>
          </li>
          
        )
    }
  return (
    <>
      <div className="container  my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              {/* <span className="textO">Order Summary</span> */}
              <div className="textO">Order Summary</div>
              {/* <span className="badge bg-black rounded-pill">{state.length}</span> */}
            </h4>
            <ul className="list-group mb-3">
           {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>Rs {price} </strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option> India </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
               <Link to={"/payment"}>
               <button className="w-100 btn btn-primary btn-dark" type="submit">
                Continue to Payment
              </button>
               </Link>
              
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
};

