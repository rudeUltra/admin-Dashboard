import '../components/login.css';
import { useRef } from 'react';
function Navbar(){
  const email = useRef(null);
  const password = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: email.current.value,
      password: password.current.value
    };

    const url = 'http://127.0.0.1:8000/api/token/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set the Content-Type header
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        localStorage.setItem('token', 'true');
      } else {
        alert('Wrong username or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

    return(
        <section className="vh-100 bg-dark">
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-7 px-0 d-none d-sm-block">
              <img src="https://images.business.com/app/uploads/2020/08/24083141/social-media-marketing-strategy.png"
                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>

            <div className="col-12 col-sm-5 text-white">
  
              
  
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
                <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
  
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form2Example18" className="form-control form-control-lg" ref={email} required/>
                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" ref={password} required/>
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>
  
                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block" type="submit">Login</button>
                  </div>
  
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
  
                </form>
  
              </div>
  
            </div>
            
          </div>
        </div>
      </section>
    );
}

export default Navbar;