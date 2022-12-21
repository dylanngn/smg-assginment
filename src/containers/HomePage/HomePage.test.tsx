import React from "react";
import { shallow } from "enzyme";
import HomePage from ".";

describe("<HomePage />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
});
