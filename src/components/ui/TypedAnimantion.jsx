import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypedAnimantion = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          `import {useState} from "react";
    const State = () => {
      const[isSignedIn, setIsSignedIn] = useState(false);
        const handleSingIn = () => {
            setIsSignedIn(true);
        }
        const handleSingOut = () => {
            setIsSignedIn(false);
        }
        return(
        <>
        <div>
           {isSignedIn ? (
            <div>
            <button type="button" onClick={handleSignOut}>Sign out</button>
            <p>welcome Back, good to see you</p>
            </div>
            ) : (
            <div>
              <button type = "button" onClick={handleSignIn}>Sign In</button>
              <p>Please Sign in</p>
            </div>
            )}
            </div>
            </>
          );
        }
        export default State;`,
          1000,
          `import React, { useState }from 'react'

          const Theform = () => {
          
            const [user, setUser] = useState('')
            const [email, setEmail] = useState('')
          
            const handleSubmit = (e) => {
              e.preventDefault()
              console.log(user, email)
          
            }
            return (
            <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter your name"  onChange={(e) 
                => {setUser(e.target.value)}} value ={user} required />
                    
                <input type="email" placeholder="enter your email" onChange={(e)  
                => {setEmail(e.target.value)}} value={email} required />
                <button type="submit">Submit</button>
                
            </form>
          
            </div>
            )
          }
          
          export default Theform;`,
          2000,
        ]}
        speed={90}
        deletionSpeed={100}
        repeat={Infinity}
      />
    </>
  );
};

export default TypedAnimantion;
