import React from "react";
import { Page, Layout, Card, Button, Stack } from "@shopify/polaris";

export default function Log(props) {
  const formattedOutput = JSON.stringify(props.output, null, 2);

  const actionsMarkup = (props.actions || []).map((action, index) => (
    <Button onClick={action.onClick} key={index}>
      {action.label}
    </Button>
  ));

  return (
    <Page title="Log">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack>{actionsMarkup}</Stack>
            <pre
              style={{
                fontFamily: "monospace",
                fontSize: "1.15em"
              }}
            >
              {formattedOutput}
            </pre>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
