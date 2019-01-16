import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'
  
const Index = props => {
    
    console.log(props.bpi)
   return (
        <Layout>
            <div className="caption">
                <h1 className="text-center">Welcome to BitPriz</h1>
            </div>
        <Prices bpi={props.bpi} />
        </Layout>
)}

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();
    return {
        bpi : data
    }
}

export default Index