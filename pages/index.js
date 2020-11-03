import {Tabs,Tab,Form,Button} from 'react-bootstrap';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar'
import { Component } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { Behavior } from "../components/Behavior";

export default function Home() {
  return (
  <Layout>
    <NavBar/>
      <Tabs defaultActiveKey="meritdemerit" id="uncontrolled-tab-example">
        <Tab eventKey="meritdemerit" title="Give Merit/Demerit">
        <BehaviorTab/>
        </Tab>
        <Tab eventKey="reward" title="Reward List">
        <RewardTab/>
        </Tab>
        <Tab eventKey="pointrecord" title="Points Record">
          <MeritTab/>
        </Tab>
        <Tab eventKey="history" title="History">
          <BehaviorComponent />
        </Tab>
      </Tabs>
  </Layout> 
  )
}

class BehaviorTab extends Component{
  render(){
    return(
      <div className={styles.main}>
      
      </div>
    )
  }
}

class RewardTab extends Component{
  render(){
    return(
      <div className={styles.main}>
        This is Tab 2
      </div>
    )
  }
}

class MeritTab extends Component{
  render(){
    return(
      <div className={styles.main}>
        This is Tab 2
      </div>
    )
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