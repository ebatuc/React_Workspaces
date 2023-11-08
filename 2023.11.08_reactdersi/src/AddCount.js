// react yazarken import diyerek kütüphaneden react çekmek gerekiyor
import {React,useState} from 'react';
function AddCount() {
    const [count,setCount] = useState(0);

    const increment = () => {
        if (count < 10){
        setCount(count  + 1)};
    };

    const decrement = () => {
        if (count > 0){
        setCount(count - 1)} ;
    };

    return (


        <div className="row-2">
            <div className="xs=1 col-6">
                <div className="fs-3 p-2">Count: {count}</div>  
                <button onClick={increment} type="button" class="btn btn-success" id="inc">Increase</button>
                <button onClick={decrement} type="button" class="btn btn-danger" id="dec">Decrease</button>
            </div>
        </div>

    );
}

export default AddCount;
