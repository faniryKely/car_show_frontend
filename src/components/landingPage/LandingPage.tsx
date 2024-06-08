import Brand from '@/components/brand/brand'
import CarShow from '../carShow/CarShow'
import Header from '../header/Header'
export default function LandingPage(){
    return(
        <>
        <div>
            <Header />
            <CarShow/>
            <Brand/>
        </div>
        </>     
    )
}