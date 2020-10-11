import Link from 'next/link'
export default function Footer(props){
    var comics=[] 
    var comicNumber;
    {comicNumber=props.comics}
    for (let i = 10; i > 0; i--) {
        comics.push(comicNumber -i) 
    }
    return (
        <>
            <ul>
                {comics.map((comicNumber) =>
                    <Link key={comicNumber} href="/comic/[id].js" as={`/comic/${comicNumber}`}>
                        <a>{comicNumber} </a>
                    </Link>
                )}
                
                <style jsx>{`
                a{
                    margin-right: 10px;
                    color: red;
                    background:white;
                    
                }

                `}
            </style>
            </ul>
                    
                
          
          
        </>
    );
}