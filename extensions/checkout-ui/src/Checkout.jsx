import {
  Banner,
  BlockStack,
  Text,
  reactExtension,
  useApi,
  useTranslate,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

export function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

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
