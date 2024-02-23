function Card(props){
    return(
        <div class="card">
  <img src="https://www.tmc.edu/news/wp-content/uploads/sites/2/2020/01/C4QCZZTUTNHO3FXMAYAUUPYWY4-copy.jpg" class="card-img-top" alt="..."/>
  <div class="card-body tex-center">
    <p class="card-text fw-bold">{props.data}: 100</p>
  </div>
</div>
    );
}

export default Card;