import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import superagent from 'superagent'
import cookie from 'react-cookies';
import Img1 from '../../asset/delete.jpg'
import Img2 from '../../asset/update.png'

export default function Resturants() {
    const [data, setData] = useState([])
    

    useEffect(async () => {

        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        let resturantData = await superagent.get(`${api}/restaurant`).set({'Authorization': 'Bearer ' +cookieData.token})
     console.log(resturantData);
        setData(resturantData.body)


    }, [data]);

    const deleteResturant=async(e)=>{
        let cookieData = cookie.load('token')

console.log(e.target.id);
let api = 'http://localhost:3020'
let deleteResturant = await superagent.delete(`${api}/restaurant/${e.target.id}`).set({'Authorization': 'Bearer ' +cookieData.token})

    }
    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>No.</th>
                        <th>Resturant Name</th>
                        <th>Resturant Address</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => {

return(
                        <tr key={index}>

                            <td>{item.id}</td>
                            <td>{item.restaurantName}</td>
                            <td>{item.restaurantLocation}</td>
                            <td > <img src={Img1} id={item.id} onClick={deleteResturant}/></td>
                            <td> <img src={Img2} /></td>

                        </tr>
                    )})}
                </tbody>
            </Table>
        </div>
    )
}
