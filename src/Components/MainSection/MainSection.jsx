import './MainSection.css'
import Heading from '../Heading/Heading';
import TakeInput from '../TakeInput/TakeInput';
function MainSection(){
    return (
        <main className='main-box'>
            <Heading/>
            <TakeInput/>
        </main>
    )
}
export default MainSection;