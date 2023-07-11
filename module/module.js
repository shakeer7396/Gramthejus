const navBar =()=>{
    return`<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success sticky-top" margin-bottom="100">
    <a class="navbar-brand" href="../index.html"><img src="Gt_L.png" alt="Logo" width="150" height="100"></a>
    <button class="navbar-toggler" type="button" text-warning data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto  justify-content-center">
               
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" text-warning data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GramThejus Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="Pages/Gt-Technologies.html">GT-TECHNOLOGIES</a>
            <a class="dropdown-item" href="#">PROJECT DESIGN</a>
            <a class="dropdown-item" href="#">WORKFORCE CONSULTANCY</a>
            <a class="dropdown-item" href="#">RECRUITMENT SERVICES</a>
           
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Devops
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">DEVOPS CONSULTING</a>
          <a class="dropdown-item" href="#">REALTIME ANALYTICS</a>
          <a class="dropdown-item" href="#">SRE</a>

          </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Staffing Solutions
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">STAFF AUGMENTATION</a>
              <a class="dropdown-item" href="#">US IT RECRUITMENT</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Company
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">ABOUT US</a>
              <a class="dropdown-item" href="#">CAREERS</a>
              <a class="dropdown-item" href="#">BANKING & FINANCE</a>
              <a class="dropdown-item" href="#">INSURANCE</a>
              <a class="dropdown-item" href="#">HEALTHCARE</a>
            
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact Us
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">ACTION</a>
              <a class="dropdown-item" href="#">ACTION PROCESS</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" >
              Employee Login
            </a>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="Pages/Blog.html" id="navbarDropdown" role="button" >
              Blog
            </a>
            
          </li>
          
      </ul>
    </div>
  </nav>
    </div>`
}
    

export {navBar} 