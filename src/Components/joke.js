import React from 'react'

function Joke(props) {

    return (
        <div>
            {props.text}
        </div>
    )
}

function JokesList(props) {

    let finList=[]

    props.jokes.map(joke => {
            finList.push(<Joke key={joke.id} text={joke.text}/>)
        })
    return finList




}

export default JokesList