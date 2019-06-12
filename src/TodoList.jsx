/*

  TodoList

  List todoListItems.

*/
import React from "react";
import { Page, Layout, Card } from "@shopify/polaris";

export default function TodoList(props) {
  const todoListItems = props.todoListItems;

  let todosMarkup;
  if (todoListItems.length) {
    todosMarkup = todoListItems.map(function(todo) {
      return <Card sectioned>todo</Card>;
    });
  } else {
    todosMarkup = <Card sectioned>No todos yet. Create one!</Card>;
  }

  return (
    <Page title="Todos">
      <Layout>
        <Layout.Section>{todosMarkup}</Layout.Section>
      </Layout>
    </Page>
  );
}
