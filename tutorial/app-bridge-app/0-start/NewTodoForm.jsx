/*

  NewTodoForm

  Simple input form.

*/
import React, { useState } from "react";
import { Page, Layout, Card, FormLayout, TextField } from "@shopify/polaris";

export default function NewTodoForm(props) {
  const [name, setName] = useState("");

  function submitForm() {
    props.onSubmitForm({ name: name, complete: false });
  }

  return (
    <Page title="New todo">
      <Layout>
        <Layout.Section>
          <Card
            sectioned
            primaryFooterAction={{
              content: "Create todo",
              onAction: submitForm
            }}
            secondaryFooterAction={{
              content: "Cancel",
              onAction: props.onDiscard
            }}
          >
            <FormLayout>
              <TextField onChange={value => setName(value)} value={name} />
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
