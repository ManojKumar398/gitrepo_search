import React from 'react'
import styled from 'styled-components'
const Display = ({ data }) => {
    // console.log(data);
    return (

        <Wrapper>
            <div className='container grid grid-three-column'>{
                data.map(e => (
                    <div className='card' key={e.id}>
                        <div className='cardheader'>
                            <img src={e.owner.avatar_url} alt='avatar' />
                            <h1>Reponame: {e.name}</h1>
                        </div>
                        <div className='cardbody'>
                            <p>Stars: {e.stargazers_count}</p>
                            <p>Language: {e.language}</p>
                            <p>Repo_URL: {e.url}</p>
                            <p>Description: {e.description}</p>
                            <p>Created At: {e.created_at}</p>
                            <p>Updated At: {e.updated_at}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`
padding: 5rem 0;
width:100%;
form{
    padding: 5rem 5rem;
    font-size: 1rem;
    input{
      width: 20%;
    border: 2px solid #000;
    font-size: 1rem;
    }
  }
  .container{
    max-width:120 rem;
  }

.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .cardbody {
    padding: 0 2rem;
  }
  .cardheader {
    padding: 0 2rem;
    p{
      color: #7E858E;
    }
    img{
      max-width:30%;
      margin-top:1rem;
      height:auto;
      padding-right: 2rem;
    }
  }
  

`
export default Display