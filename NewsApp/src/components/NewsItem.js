

// Class Based Component **********************************************

// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, imageUrl, url, author, date, source } = this.props;
//     return (
//       <div>
//         <div className="card my-3" style={{width: "18rem"}}>
//   <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/06/17/550x309/deepinder_goyal_1626246695822_1718593897809.JPG"} className="card-img-top" alt="..."/>
//   <div className="card-body">
//   <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '77%', zIndex: '1'}}> {source}</span></h5>
//     <p className="card-text">{description}</p>
//     <p className="card-text"><small class="text-muted">By {author} on {new Date (date).toGMTString()}</small></p>
//     <a href={url} target="_blank"  className="btn btn-sm btn-dark">Read More</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItem


// Function Based Component *******************************************

import React from 'react'

const  NewsItem =(props)=> {

    let {title, description, imageUrl, url, author, date, source } = props;
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/06/17/550x309/deepinder_goyal_1626246695822_1718593897809.JPG"} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '77%', zIndex: '1'}}> {source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date (date).toGMTString()}</small></p>
    <a href={url} target="_blank"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )

}

export default NewsItem