import React from 'react'
//rafce 
const List = (props) => {
    const {people} = props;
  return (
    <div>
        {people.map((person)=>{
            return(
            <article className="person" key={person.id}>
                <img src={person.image}alt="profile image"/>
                <div>
                    <h4>{person.name}</h4>
                    <p>{person.age} years old</p>
                </div>
            </article>
            );
        })}
    </div>
  )
}

export default List