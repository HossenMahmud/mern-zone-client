import React from 'react';
import logo from '../../../image/logo (1).png';

const Navigation = () => {
    return (
          <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img width="70px" src={logo} alt="Logo" />
          <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <br />
            
            <button type="button" class="btn btn-outline-primary">Create Post</button>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;