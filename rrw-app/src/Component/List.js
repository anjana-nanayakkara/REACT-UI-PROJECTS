import React from 'react'

const List = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <img style={{width:'100px',height:'55px',margin:'10px'}} src='https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'/>
            
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarku\p"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
              <a class="nav-link active" aria-current="page" href="#">
                Services
              </a>
              <a class="nav-link active" aria-current="page" href="#">
                Contact
              </a>
              <a class="nav-link active" aria-current="page" href="#">
                Policy
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default List