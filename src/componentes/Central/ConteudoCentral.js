import './ConteudoCentral.css';
import Stories from './Story/Stories';
import Feed from './Feed';

export default function ConteudoCentral () {
    return (
        <div className='ConteudoCentral'>
            <Stories />
            <Feed />
        </div>
    )
}