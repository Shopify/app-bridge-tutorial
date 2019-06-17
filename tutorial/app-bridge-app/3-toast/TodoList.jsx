/*

  TodoList

  Lists todoListItems.

*/
import React from "react";
import { Page, Layout, Card, Stack, Checkbox } from "@shopify/polaris";

export default function TodoList(props) {
  const todoListItems = props.todoListItems || [];

  function renderEmptyState() {
    return <p>No todos yet. Create one!</p>;
  }

  function renderTodoList() {
    return (
      <Stack vertical>
        {todoListItems.map(function(todo, index) {
          return (
            <Checkbox
              key={index}
              checked={todo.complete}
              onChange={() => props.toggleTodoComplete(index)}
              label={todo.name}
            />
          );
        })}
      </Stack>
    );
  }

  return (
    <Page title="Todos">
      <Layout>
        <Layout.Section>
          <Card
            sectioned
            primaryFooterAction={{
              content: "Create todo",
              onAction: props.createTodoAction
            }}
          >
            {todoListItems.length ? renderTodoList() : renderEmptyState()}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
