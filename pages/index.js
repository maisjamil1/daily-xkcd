import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header/>

      <h1>{props.comics.title}</h1>
      <img className='imgg'src={props.comics.img} />
      <h2>previous 10 comics</h2>
      
      <Footer comics ={props.comics.num}/>
    </div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('https://xkcd.com/2369/info.0.json');
  const data = await res.json();

  return {props : {comics:data}};

}
