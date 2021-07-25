import React from 'react'
import {  Button, Table } from 'react-bootstrap';


const Dashboard = (ABC) => {

    console.log(ABC);
    console.log(ABC.ABC);
    console.log(ABC.ABC['cases_time_series']);
    console.log(ABC.ABC['cases_time_series']);

    let i;
    for (i in ABC.ABC['cases_time_series']){
        // console.log(i);
        // console.log(i);
        // console.log(i[0]['dailyconfirmed']);
    }   





    return (
        <div>
            {/* <Button > Start </Button> */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Dashboard
