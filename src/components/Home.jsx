import React, { useState } from 'react'
import Display from './Display';
import axios from 'axios';
import Pagination from './Pagination';
import styled from 'styled-components';
const Home = () => {
    const sortOptions = ["stars", "watchers_count", "score", "name", "created_at", "updated_at"];
    const [repoName, setRepoName] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const onChangeHandler = (e) => {
        setRepoName(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        return await axios.get(`https://api.github.com/search/repositories?q=${repoName}`)
            .then((response) => {
                setData(response.data.items);
            })
            .catch((err) => { console.log("Error while fetching", err); })
    }
    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value)

        if (value === "name") {
            data.sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,)
        }
        if (value === "stars" ) {
            data.sort((a, b) =>
                a.stargazers_count - b.stargazers_count)
        }
        if (value === "watchers_count") {
            data.sort((a, b) =>
                a.watchers_count - b.watchers_count)
        }
        if (value === "score"  ) {
            data.sort((a, b) =>
                a.score - b.score)
        }
        if (value === "created_at" ) {
            data.sort((a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
        }
        if (value === "updated_at" )  {
            data.sort((a, b) =>
                new Date(a.updated_at).getTime() -
                new Date(b.updated_at).getTime()
            )
        }
    }
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <Wrapper>
            <h1 className="Heading">GitHub Repo Search With React JS</h1>
            <form className='search' id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                <input className="form-control form-control-lg" placeholder="Github Reponame" type='text' id="w" onChange={onChangeHandler} />
                <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>

            </form>
            <div className='sort'>
                <select className='sortselect' onChange={handleSort} value={sortValue}>
                    <option>SortBy</option>
                    {sortOptions.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))
                    }
                </select>
            </div>
            <Display data={currentPosts}></Display>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </Wrapper>

    )
}
const Wrapper = styled.section`
padding: 5rem 0;
.sort{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.sortselect{
    width:20%;
    height: 20%;
    border: 2px solid #000;
    font-size: 2rem;
    padding-right:2rem;
 }
.Heading{
    font-size: 3rem;
    text-align:center;
}
form{
  padding: 3rem ;
  display: flex;
  gap:2rem;
    flex-direction: row;
    justify-content: center;
    .sortselect{
        width:80%;
        height: 100%;
        border: 2px solid #000;
        font-size: 2rem;
     }
  input{
    height: 20%;
    border: 2px solid #000;
    font-size: 2rem;
    padding-right:2rem;
  }
  button{
    height: 20%;
    color:white;
    background-color:green;
    font-size: 2rem;
  }
  
}`
export default Home;