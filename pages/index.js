import {
  Tabs,
  Tab,
  Table,
  Button,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { Behavior } from "../components/Behavior";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Tabs defaultActiveKey="meritdemerit" id="uncontrolled-tab-example">
        <Tab eventKey="meritdemerit" title="Give Merit/Demerit">
          <BehaviorTab />
        </Tab>
        <Tab eventKey="reward" title="Reward List">
          <RewardTab />
        </Tab>
        <Tab eventKey="pointrecord" title="Points Record">
          <PointTab />
        </Tab>
      </Tabs>
    </Layout>
  );
}

class RedeemReward extends Component {
  render() {
    return (
      <div>
        <div>
          Child's name:
          <select id="child" name="child" className="ml-2">
            <option value="Brandon">Brandon</option>
            <option value="Ellie">Ellie</option>
            <option value="Carla">Carla</option>
          </select>
        </div>
        <div className="mt-2">
          Merit point(s):
          {" 50 pts"}
        </div>
        <hr />
        <div className="row mb-2">
          <h4>Available rewards:</h4>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Points Quota</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Coloring Book</td>
              <td>400</td>
              <td>
                <Button type="button" class="btn btn-primary btn-sm">
                  Redeem
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Theme Park</td>
              <td>2000</td>
              <td>
                <Button type="button" class="btn btn-primary btn-sm">
                  Redeem
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>New Toy</td>
              <td>1000</td>
              <td>
                <Button type="button" class="btn btn-primary btn-sm">
                  Redeem
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

class ViewRewardList extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover size="sm" className="m-2">
          <th>Reward</th>
          <th>Points Quota</th>
          <tr>
            <td>Coloring Book</td>
            <td>400</td>
          </tr>
          <tr>
            <td>New Toy</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Theme Park</td>
            <td>2000</td>
          </tr>
        </Table>
      </div>
    );
  }
}

class BehaviorTab extends Component {
  render() {
    return (
      <div className="m-3">
        <div>
          Child's name:
          <select id="child" name="child" className="ml-2">
            <option value="Brandon">Brandon</option>
            <option value="Ellie">Ellie</option>
            <option value="Carla">Carla</option>
          </select>
        </div>
        <div className="mt-2">
          Merit point(s):
          {" 50 pts"}
        </div>
        <br />
        <div className="mt-2 text-success">
          Merit point(s) after update:
          {" 50 pts"}
        </div>
        <hr />
        <div className="row mb-2">
          <Form inline className="ml-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

          <DropdownButton
            className="ml-5"
            id="dropdown-basic-button"
            title="Sort By"
          >
            <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Type</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Point (Ascending)</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Point (Descending)</Dropdown.Item>
          </DropdownButton>

          <Button className="ml-3 disabled" variant="primary">
            Deselect All
          </Button>
          <Button className="ml-5" variant="success">
            Confirm
          </Button>
        </div>
      </div>
    );
  }
}

class RewardTab extends Component {
  render() {
    return (
      <div className="m-3">
        <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
          <Tab eventKey="view" title="View Reward List">
            <ViewRewardList />
          </Tab>
          <Tab eventKey="redeem" title="Redeem Reward">
            <br />
            <RedeemReward />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class PointTab extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover size="sm" className="m-2">
          <th>Child Name</th>
          <th>Points</th>
          <tr>
            <td>Becky</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Newman</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Ted</td>
            <td>2000</td>
          </tr>
        </Table>
      </div>
    );
  }
}

const BehaviorComponent = ({ data }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql-data",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h3>History</h3>
        <Behavior />
      </div>
    </ApolloProvider>
  );
};
