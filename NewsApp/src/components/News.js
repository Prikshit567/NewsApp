
// Class Based Component **********************************************


// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// // import InfiniteScroll from 'react-infinite-scroll-component';

// // newAPI=1c6f7490406446e994b713a506652f3d
// // oldAPI=ce0fb957b8d24a7e9bdb6da8356fb15



// export class News extends Component {
//     static defaultProps ={
//         pageSize: 5,
//         country:'in',
//         category:'general',
//     }

//     static propTypes = {
//         pageSize: PropTypes.number,
//         country: PropTypes.string,
//         category: PropTypes.string

//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0
//         };
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - BulletNews`
//     }

//     async updateData(){
//         this.props.setProgress(0);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({loading: true})
//         let data = await fetch(url);
//         this.props.setProgress(30);
//         let parsedData = await data.json();
//         this.props.setProgress(70);
//         this.setState({ 
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false,
//      });
//      this.props.setProgress(100);
//     }

//     async componentDidMount() {
//         this.updateData(this.state.page);


//     }
//     handleNextClick = async () =>  {
//         if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//             this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
//                 this.updateData(this.state.page);
//             });
//         }
//     }

//     handlePrevClick = async () => {
//     if (this.state.page > 1) {
//         this.setState((prevState) => ({ page: prevState.page - 1 }), () => {
//             this.updateData(this.state.page);
//         });
//     }
//     }
//     // fetchMoreData = async () => {
//     //     this.setState({ page: this.state.page + 1 });
//     //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     //     let data = await fetch(url);
//     //     let parsedData = await data.json();
//     //     this.setState({ 
//     //         articles: this.state.articles.concat(parsedData.articles),
//     //         totalResults: parsedData.totalResults,
//     //         loading: false,
//     //     });  
//         // };

//     render() {
//         return (
//             <div className='container my-3'>
//                 <h2 className="text-center">Bullet News - Top {this.capitalizeFirstLetter(this.props.category)}  HeadLines</h2>
//                { this.state.loading && <Spinner/>}
//                 {/* <InfiniteScroll
//   dataLength={this.state.articles.length} //This is important field to render the next data
//   next={this.fetchMoreData}
//   hasMore={this.state.articles.length !== this.state.totalResults}
//   loader={<Spinner/>}>  */}
//                 <div className="row">
//                     {!this.state.loading && this.state.articles?.map((element, index) => {
//                         return <div className="col-md-4" key={`${element.url}-${index}`}>
//                             <NewsItem title={element.title ? element.title.slice(0,30) : ""}
//                                 description={element.description ? element.description.slice(0, 100) : "Nothing for Description "} imageUrl={element.urlToImage}
//                                 newsUrl={element.url} author={element.author?element.author:"Unknown" } url={element.url?element.url:""} urlToImage={element.urlToImage?element.urlToImage:""} content={
//                                     element.content?element.content:""}  date={element.publishedAt} source={element.source.name} />
//                         </div>    
//                     })}    
//                 </div>
//                  {/* </InfiniteScroll>  */}
//                 <div className="d-flex justify-content-between">
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                 <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>

//             </div>
//         )}}

// export default News


// function Based Component **********************************************

// newAPI=1c6f7490406446e994b713a506652f3d
// oldAPI=ce0fb957b8d24a7e9bdb6da8356fb15

// import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';




const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalizeFirstLetter(props.category)} - BulletNews`


const updateData = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
}

useEffect(() => {
  updateData();
  // eslint-disable-next-line
}, [])

const handleNextClick = async () => {
    setPage(page+1)
    updateData();
}

const handlePrevClick = async () => {
    setPage(page-1)
    updateData();
}
// const fetchMoreData = async () => {   
//     setPage(page+1) 
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//   };


return (
    <div className='container my-3'>
        <h2 className="text-center">Bullet News - Top {capitalizeFirstLetter(props.category)}  HeadLines</h2>
        {loading && <Spinner />}
        {/* <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={articles.length !== totalResults}
  loader={<Spinner/>}>  */}
        <div className="row">
            {!loading && articles?.map((element, index) => {
                return <div className="col-md-4" key={`${element.url}-${index}`}>
                    <NewsItem title={element.title ? element.title.slice(0, 30) : ""}
                        description={element.description ? element.description.slice(0, 100) : "Nothing for Description "} imageUrl={element.urlToImage}
                        newsUrl={element.url} author={element.author ? element.author : "Unknown"} url={element.url ? element.url : ""} urlToImage={element.urlToImage ? element.urlToImage : ""} content={
                            element.content ? element.content : ""} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
        </div>
        {/* </InfiniteScroll>  */}
        <div className="d-flex justify-content-between">
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
            <button disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>

    </div>
)}



News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,

}
export default News