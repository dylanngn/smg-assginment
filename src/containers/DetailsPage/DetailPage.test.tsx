import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import DetailPage from ".";

jest.mock("../../assets/listings", () => [
  {
    id: "1",
    title: "Weitsicht in die Berge",
    description: "This is a description",
    images: [
      "https://test.homegate.ch/www/ftp/ipv/images/201009161631255789434.jpg",
      "https://test.homegate.ch/www/ftp/ipv/images/201009061626312369207.jpg",
      "https://test.homegate.ch/www/ftp/ipv/images/200910271509502031428.jpg",
    ],
  },
]);

describe("<DetailPage />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Route path="/details/:listingId">
          <DetailPage />
        </Route>
      </MemoryRouter>
    );
  });

  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
});
