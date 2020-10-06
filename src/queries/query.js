import { gql } from "@apollo/client";

const GETTODOS = gql`
  query getTodosQuery {
    todo(order_by: {id: desc})  {
      id
      todos
      isCompleted
    }
  }
`;

const ADDTODOMUTATION = gql`
  mutation addTodo($todo: String!) {
    insert_todo(objects: { todos: $todo }) {
      affected_rows
    }
  }
`;

const ISCOMPLETEDMUTATION = gql`
    mutation($id: Int!, $isCompleted: Boolean){
  update_todo_by_pk(
    pk_columns: {id: $id}
  	_set: { isCompleted: $isCompleted}
  ){
    id
    isCompleted
  }
}
`;

const DELETETODOMUTATION = gql`
  mutation ($id: Int!) {
  delete_todo_by_pk(id: $id){
    id
  }
}

`;

export {GETTODOS, ADDTODOMUTATION, ISCOMPLETEDMUTATION, DELETETODOMUTATION}
