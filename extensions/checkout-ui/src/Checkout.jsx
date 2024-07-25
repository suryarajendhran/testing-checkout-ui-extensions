import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  useApi,
  useTranslate,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

export function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <Banner title="checkout-ui">
        {translate("welcome", {
          target: <Text emphasis="italic">{extension.target}</Text>,
        })}
      </Banner>
    </BlockStack>
  );
}