import { useEffect, useState } from "react"

function Home() {

    let [firstName, setFirstName] =useState('')
       useEffect(() => {
        fetch("/users", {
            method:"POST",
            body: {
                name: firstName
            }
        })
       },[])
    return (
       <div>home</div>
    )
}

export default Home