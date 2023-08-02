import { useContext } from 'react';
import { Context } from '../App';

const ListA = () => {

    const {items} = useContext(Context)
    console.log(items);
    return (
        <div>
            <div>ListA</div>
            <ul>
                {items && items.map((i) => <li key={i.id}>{i.name}</li>)}
            </ul>

        </div>

    )
}

export default ListA