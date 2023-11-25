import React from "react" ;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide , SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {

  const [Veggie, setVeggie] = useState([]);
    useEffect(() => {
    getveggie();
  }, []);

  const getveggie = async () => {
    const check = localStorage.getItem('veggie');
    if (check){
        setVeggie(JSON.parse(check));
    }
    else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?number=12&tags='vegetarian '&apiKey=8e70d89e6af94a1d8c18e96c1cf1a2fb`
          );
          const data = await api.json();
          localStorage.setItem('veggie', JSON.stringify(data.recipes));
          setVeggie(data.recipes)
          console.log(data.recipes)
    }

    
  };

  return (
    <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    drag: 'free',
                    gap: '5rem',
                }}>
                {Veggie.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                        <Link to={"/recipe/" + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                        <Gradient/>
                        </Link>
                        </Card>
                        </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
height: 20rem;
width: 25rem;
border-radius: 2rem;
overflow: hidden;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    
    `

export default Veggie