import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome/Welcome";
import { RowTitle } from "../components/RowTitle.style";
import { Card } from "../components/Card.style";
import Button from "../components/Button";
import { Widgets } from "../components/Widgets.style";

import clock from "../img/icons/clock.svg";

export const IndexPageTemplate = ({ image, title, heading, subheading }) => (
  <>
    <Welcome image={image} heading={heading} subheading={subheading} />
    {/* Payroll Section */}
    <div className="container mt-6 mb-6">
      <div>
        <RowTitle>
          <h1>
            Reinforce your business with <br />
            Cadprime Payroll System!
          </h1>
        </RowTitle>
      </div>
      <div className="horizontal-scroll-full">
        <div className="cards">
          <Card>
            <h2>
              payroll <span className="bold"> basic</span>
            </h2>
            <span className="subtext">$20.00/mo.*</span>
            <p>
              Cadprime Payroll Basic provides all basic requirements in
              generating standard payroll procedures. It is an all-in payroll
              service system that will start from biometric integration of your
              phone to payroll-related report generation supported by our
              system’s functional, practical, and all-ages friendly user
              interface of our system.
            </p>
            <Button text="buy now" />
          </Card>
          <Card type="secondary">
            <h2>
              payroll <span className="bold"> basic</span>
            </h2>
            <span className="subtext">$20.00/mo.*</span>
            <p>
              Cadprime Payroll Basic provides all basic requirements in
              generating standard payroll procedures. It is an all-in payroll
              service system that will start from biometric integration of your
              phone to payroll-related report generation supported by our
              system’s functional, practical, and all-ages friendly user
              interface of our system.
            </p>
            <Button text="buy now" />
          </Card>
        </div>
      </div>
    </div>
    {/* Benefits Section */}
    <div className="benefits colored">
      <div className="benefits__left">
        <h1>Major Benefits</h1>
        <p>
          Payroll systems help the company generate an automated payroll
          computation with fewer human-error results that will lead to sound
          decisions within the organization.
        </p>
      </div>
      <div className="benefits__right">
        <div className="horizontal-scroll">
          <div className="benefits__widgets">
            <Widgets>
              <img src={clock} />
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Widgets>
            <Widgets>
              <img src={clock} />
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Widgets>
            <Widgets>
              <img src={clock} />
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Widgets>
          </div>
        </div>
      </div>
    </div>
    {/* Demo Section */}
    <div className="demo">
      <RowTitle>
        <h1>
          Feeling kinda sus? <br />
          We got you!
        </h1>
      </RowTitle>

      <p>Test out Cadprime Payroll System for 60 days, no charges included!</p>
      <div className="mt-5">
        <Button text="sign up for a demo" type="secondary" />
      </div>
      <div className="mb-5">
        <span className="sub-text">
          You can cancel your trial anytime. Even right now. Just kidding.
        </span>
      </div>
    </div>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
