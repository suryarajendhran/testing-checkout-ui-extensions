import { createRoot } from "@remote-ui/react";
import { mount } from "@remote-ui/testing";
import * as Shopify from "@shopify/ui-extensions-react/checkout";
import { Extension } from "./Checkout";
import "@remote-ui/testing/matchers";

jest.mock("@shopify/ui-extensions-react/checkout", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@shopify/ui-extensions-react/checkout"),
  };
});

jest
  .spyOn(Shopify, "useTranslate")
  .mockImplementation(() => (translationKey) => translationKey);

jest.spyOn(Shopify, "useApi").mockImplementation(() => ({
  extension: { target: "purchase.checkout.block.render" },
}));

describe("Extension", () => {
  it("renders the welcome text", () => {
    const app = mount((root) => {
      createRoot(root).render(<Extension />);
    });

    expect(app).toContainRemoteText("welcome");
  });
});
