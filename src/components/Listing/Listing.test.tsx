import React from "react";
import { shallow } from "enzyme";
import Listing from ".";

describe("<Listing />", () => {
  const defaultProps = {
    imgSrc: "src",
    title: "A new listing",
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Listing {...defaultProps} />);
  });

  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
});
