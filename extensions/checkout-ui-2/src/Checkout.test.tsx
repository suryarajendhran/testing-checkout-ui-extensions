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
  // biome-ignore lint/suspicious/noExplicitAny: can't mock an i18n function
  .mockImplementation(() => (translationKey: string) => translationKey as any);

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
