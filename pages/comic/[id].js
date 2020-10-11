import Header from '../../components/Header'

export default function ComicDetails(props){
    return (
        <>
            <div >
            <Header/>
            <h1>{props.comics.title}</h1>
            <img className='imgg' src={props.comics.img}></img>
            </div>
           
        </>
    )
}



export async function getServerSideProps(context){
    const id = context.query.id
    console.log(id);
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {comics: dataObj} };
}
