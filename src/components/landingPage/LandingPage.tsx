import Brand from '@/components/brand/brand'
import CarShow from '../carShow/CarShow'
import Header from '../header/Header'

export default function LandingPage(){
    return(
        <>
        <div className='landingPage'>
            <Header />
            <div className='body'>
                <CarShow/>
            </div>
        </div>
        </>     
    )
}