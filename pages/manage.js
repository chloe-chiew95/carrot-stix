import Layout from '../components/layout'
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar.js'
import { Component } from 'react';
import {Tabs, Tab, Form, Button,Table, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

export default function Manage() {
    return (

    <Layout>
        <NavBar />
        <Tabs defaultActiveKey="behavior" id="uncontrolled-tab-example">
            <Tab eventKey="behavior" title="Behaviors">
            <BehaviorTab/>
            </Tab>
            <Tab eventKey="reward" title="Rewards">
            <RewardTab/>
            </Tab>
            <Tab eventKey="child" title="Child">
            <ChildTab/>
            </Tab>
        </Tabs>
    </Layout>

    )
  }
  class BehaviorTab extends Component{
    render(){
      return(
        <div className='m-3'>
          <h3>Manage Behavior List</h3><br/>
          <div className="row mb-2">

              <Form inline className='ml-2'>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
              </Form>

              <DropdownButton className='ml-5' id="dropdown-basic-button" title="Sort By">
                <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Point (Ascending)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Point (Descending)</Dropdown.Item>
              </DropdownButton>

              <Button className='ml-5' variant="success">Add New</Button>
              <Button className='ml-3 disabled' variant="primary">Deselect All</Button>
             

          </div>
          <div>
              <Table>
                <thead>
                <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Points</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                  
                </td>
                <td>1</td>
                <td>Doing Homework</td>
                <td>Merit</td>
                <td>50</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>2</td>
                <td>Eating Vegetables</td>
                <td>Merit</td>
                <td>50</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>3</td>
                <td>Fighting with sibling</td>
                <td>Demerit</td>
                <td>-40</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                </tbody>
              </Table>
          </div>
          </div>
      )
    }
  }
  
  class RewardTab extends Component{
    render(){
      return(
        <div className='m-3'>
          <h3>Manage Reward List</h3><br/>
          <div className="row mb-2">

              <Form inline className='ml-2'>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
              </Form>

              <DropdownButton className='ml-5' id="dropdown-basic-button" title="Sort By">
                <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Points Quota (Ascending)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Points Quota (Descending)</Dropdown.Item>
              </DropdownButton>

              <Button className='ml-5' variant="success">Add New</Button>
              <Button className='ml-3 disabled' variant="primary">Deselect All</Button>
             

          </div>
          <div>
              <Table>
                <thead>
                <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Points Quota</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                  
                </td>
                <td>1</td>
                <td>Coloring Book</td>
                <td>400</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>2</td>
                <td>Theme Park</td>
                <td>2000</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>3</td>
                <td>New Toy</td>
                <td>1000</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                </tbody>
              </Table>
          </div>
          </div>
      )
    }
  }
  
  class ChildTab extends Component{
    render(){
      return(
        <div className='m-3'>
          <h3>Manage Child List</h3><br/>
          <div className="row mb-2">

              <Form inline className='ml-2'>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
              </Form>

              <Button className='ml-5' variant="success">Add New</Button>
              <Button className='ml-3 disabled' variant="primary">Deselect All</Button>
             

          </div>
          <div>
              <Table>
                <thead>
                <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                  
                </td>
                <td>1</td>
                <td>Brandon</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>2</td>
                <td>Jessie</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                <tr>
                <td>
                  
                </td>
                <td>3</td>
                <td>Alex</td>
                <td>
                  <Button className=' m-2'>Edit</Button>
                  <Button variant='danger' className=' m-2'>Delete</Button>
                </td>
                </tr>
                </tbody>
              </Table>
          </div>
          </div>
      )
    }
  }