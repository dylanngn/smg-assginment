import React from "react";
import { shallow } from "enzyme";
import Card from ".";

describe("<Card />", () => {
  const defaultProps = {
    imgSrc: "src",
    title: "A new Card",
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Card {...defaultProps} />);
  });

  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
});
