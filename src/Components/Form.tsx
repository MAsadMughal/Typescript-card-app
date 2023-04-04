import React, { useState } from 'react'
import { IState as IProps } from "../App"
interface Props {
    setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
    people: IProps["people"];
}


const Form: React.FC<Props> = ({ people, setPeople }) => {
    const [man, setMan] = useState({
        name: "",
        city: "",
        address: "",
        image: ""
    });

    const Add = () => {
        const { name, city, address, image } = man;
        if (name && city && address && image) {
            setPeople([...people, { name: man.name, city: man.city, address: man.address, image: man.image }])
            setMan({ name: "", city: "", address: "", image: "" });
        } else {
            window.alert("Fill All the details.")
        }
    }

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, } = e.target;
        setMan({ ...man, [name]: value });
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.files?.[0];
        console.log(url);
        if (url) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setMan({ ...man, image: reader.result as string });
            }
            reader.readAsDataURL(url);
        }
        console.log(man.image);
    }


    return (<div className='row w-50'>
        <input type="text" value={man.name} name='name' placeholder='Enter your name' className=' p-2 rounded mt-2' onChange={change} />
        <input type="text" value={man.city} name='city' placeholder='Enter your city' className='p-2 rounded mt-2' onChange={change} />
        <input type="text" value={man.address} name='address' placeholder='Enter your address' className='p-2 rounded mt-2' onChange={change} />
        <input type="file" name='image' placeholder='Enter your image' style={{ padding: "5px", border: "1px solid white", marginTop: "5px" }} onChange={handleImage} />
        <button className='btn btn-info text-light mt-4 mb-4' onClick={Add}>Add Details</button>
    </div>
    )
}

export default Form