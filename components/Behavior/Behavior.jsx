import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_BEHAVIOR = gql`
  query {
    behavior {
    id
    name
    point
    }
  }
`;

const SET_BEHAVIOR = gql`
  mutation UpdateBehavior($id: ID!, $name: String!, $point: Int!) {
    updateBehavior(id: $id, name: $name, point: $point) {
        id
        name
        point
    }
  }
`;

const BehaviorInfo = () => {
  const { loading, error, data } = useQuery(GET_BEHAVIOR);

  const updateCache = (cache, { data: { updateBehavior } }) => {
    const existingBehavior = cache.readQuery({
      query: GET_BEHAVIOR,
    });
    cache.writeQuery({
      query: GET_BEHAVIOR,
      data: { behavior: updateBehavior },
    });
  };

  const [updateBehavior] = useMutation(SET_BEHAVIOR, { update: updateCache });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const updateBehaviorDetails = () => {
    updateBehavior({
      variables: {id: 1, name: "Doing Homework", point: 50 },
    });
  };

  return (
    <div>
      <p>
        {data.behavior.name} - {data.behavior.author}
      </p>
      <button onClick={updateBehaviorDetails}>Update Behavior</button>
    </div>
  );
};

export default BehaviorInfo;