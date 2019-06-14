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
import { ContextualSaveBar } from "@shopify/app-bridge/actions";

export default function NewTodoForm(props) {
  const appBridgeClient = props.appBridgeClient;
  const [name, setName] = useState("");

  function submitForm() {
    props.onSubmit({ name });
    contextBar.dispatch(ContextualSaveBar.Action.HIDE);
  }

  const contextBar = ContextualSaveBar.create(appBridgeClient);
  contextBar.dispatch(ContextualSaveBar.Action.SHOW);

  contextBar.subscribe(ContextualSaveBar.Action.DISCARD, function() {
    props.onDiscard();
    contextBar.dispatch(ContextualSaveBar.Action.HIDE);
  });

  contextBar.subscribe(ContextualSaveBar.Action.SAVE, function() {
    submitForm();
  });

  return (
    <Page title="Create a new Todo">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form onSubmit={submitForm}>
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
