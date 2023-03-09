import React from 'react';
import './App.css';
import logo from './logo.svg';
function App() {
  return (

   
    <div class="h-full backdrop-blur-sm mx-1 py-1">
  
    
        
    <div className={App}>
      <header className="App-header">
     
      <img src={logo} className="App-logo" alt="logo" />
        
      
      </header>
    </div>
  
  <div class=" h-[670px] w-[1530px] bg-gray-50 py-6 sm:py-12 rounded-md shadow-xl shadow-rose-600/40 ring-1 ring-indigo-0 " >

      <div class="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-1 ring-indigo-0 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-900">
          Contact Form
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Abdelfettah Jabri"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="abdelfettah.jabri@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Send message
            </button>
          </div>
          <div></div>
        </form>
      </div>
 
      </div>

  </div>
  );
}

export default App;
