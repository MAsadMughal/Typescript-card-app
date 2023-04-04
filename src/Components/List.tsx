import { IState as IProps } from "../App"



const List = ({ people }: IProps) => {
    return (
        <div className="table-responsive-sm w-50">
            <table className="table table-success ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th colSpan={2}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {people && people.map((item, i) => {
                        return (<tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.address}</td>
                            <td colSpan={2}><img width="200px" alt='pro' src={item.image} /></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
}

export default List
