/*

  NewTodoForm

  Simple form with one text field.

*/
import React, { useState } from "react";
import {
  Page,
  Layout,
  Card,
  Form,
  FormLayout,
  TextField,
  Button
} from "@shopify/polaris";

export default function NewTodoForm(props) {
  const [name, setName] = useState("");

  return (
    <Page title="Create a new Todo">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form onSubmit={() => props.onSubmit({ name })}>
              <FormLayout>
                <TextField onChange={name => setName(name)} value={name} />
                <Button submit>Create</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
