import React from 'react'


function Hero() {

    return (
        <div className="hero-photo">
            <div className="hero">
                <h1>SHARE</h1>
                <h1>YOUR</h1>
                <h1>TOP</h1>
                <h1>FIVE</h1>
            </div>
            <button className="register-small">Join Now</button>
            <p className="login-small">Already have an account? Login in <span className="red-highlight">Here</span></p>
            
            <div className="hero-image">
               
            </div>
            <div className="sign-up-form">
                <h1>SIGN UP</h1>
                <p>Share your favorite five things about anything! Connect with your friends and family.</p>
                <form className="guest-form" action="">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder="Ex: John" />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder="Ex: Doe" />
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Ex: jdoe@topfive.com" /> 
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Ex. johndoe" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter a password" />

                    <input className="Signup-btn" type="submit" value="Sign Up Now!" />
                </form>
            </div>
        </div>
    )
}

export default Hero
