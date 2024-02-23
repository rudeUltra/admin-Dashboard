
import '../components/dashboard.css'
import PieChart from './chart';
import Bargraph from './barchar';
import Card from './card';
import { useState,useEffect,useRef } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';

function DashBoard(){
  
  const flag=useLoaderData();
  if(flag===false){
    alert("Please Login First");
    return <Navigate to="/" replace={true} />
    
    //Route Protection
  }



  const postIdRef = useRef(null);
  const postNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postId = postIdRef.current.value;
    const postName = postNameRef.current.value;
    const newItem = { index:postId, data:postName,likes:0,comments:0,shares:0 };

    addItem(newItem);
    // Reset form fields
    postIdRef.current.value = '';
    postNameRef.current.value = '';
    alert("Post Added ⭐")
  };


  const [items, setItems] = useState([{
    index:'1',data:'abcd',likes:'69',comments:'100',shares:'10'
  }, {
    index:'2',data:'abcde',likes:'100',comments:'50',shares:'2'
  }, {
    index:'3',data:'Post',likes:'21',comments:'29',shares:'100'
  }]);

  // Function to add a new item to the list
  const addItem = (newItem) => {
    setItems([...items, newItem]); //aha
  };

  useEffect(() => {
    //Make API call to update to server here.
  }, [items]);

    return(
        <>
        <header class="navbar sticky-top bg-primary flex-md-nowrap p-0 shadow" data-bs-theme="dark">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

  <ul class="navbar-nav flex-row d-md-none">
    
    <li class="nav-item text-nowrap">
      <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        Toggle
      </button>
    </li>
  </ul>

  
</header>




        <div class="container-fluid">
  <div class="row">
    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                
                Customers
              </a>
            </li>
            
          </ul>

          <hr class="my-3"/>

          <ul class="nav flex-column mb-auto">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-5 flex-wrap'>
      <div class="my-4 w-25 text-center">
      <h1>Distribution</h1>
      <PieChart/>
      </div>

      <div class="my-4 w-50 text-center">
      <h1>Progress</h1>
      <Bargraph/>
      </div>

      </div>

      <div className='d-flex justify-content-center flex-wrap align-items-center gap-5 mb-5'>
  <div className='flex-item' style={{height:'250px',width:'18rem'}}><Card img='' data='Likes'/></div>
  <div className='flex-item' style={{height:'250px',width:'18rem'}}><Card img='' data='Comments'/></div>
  <div className='flex-item' style={{height:'250px',width:'18rem'}}><Card img='' data='Shares'/></div>
  <div className='flex-item' style={{height:'250px',width:'18rem'}}><Card img='' data='Posts'/></div>
</div>

      <h2>Section title</h2>
      <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Post ID</th>
              <th scope="col">Post Name</th>
              <th scope="col">Likes</th>
              <th scope="col">Comments</th>
              <th scope="col">Shares</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item, index) => (
          <tr key={index}>
              <td>{item.index}</td>
              <td>{item.data}</td>
              <td>{item.likes}</td>
              <td>{item.comments}</td>
              <td>{item.shares}</td>
          </tr>
        ))}
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            
          </tbody>
        </table>
        <button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Post</button>
        
      </div>
    </main>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postId" className="form-label">Post ID</label>
          <input type="text" className="form-control" id="postId" ref={postIdRef} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="postName" className="form-label">Post Name</label>
          <input type="text" className="form-control" id="postName" ref={postNameRef} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-danger m-2" data-bs-dismiss="modal">Close</button>
      </form>
    </div>
      </div>
      
    </div>
  </div>
</div>

        </>
        

    );
}

export default DashBoard;