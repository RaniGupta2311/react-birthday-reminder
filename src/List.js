// destructuring of props
function List({people}){
    return(
        <>  
        {
            people.map((person)=>{
                {/* destructuring of person object */}
                const {id,name,age,image}=person;
                return <article key={id} className="person">
                    <img src={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            })
        }
        </>
    )
}
export default List