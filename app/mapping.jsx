import Link from "next/link"


export default function Mapping({id,name,extra}){
    return(
        <div>
            
            <Link
                href={`/${id}`}
            ><h1>hellllo{id},{name}</h1></Link>

        </div>
    )
}