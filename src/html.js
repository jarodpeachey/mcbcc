import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <script async defer data-domain="jellydevelopment.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}

        {/* <script src={withPrefix("js/main.js")} type="text/javascript" /> */}

        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.panelbear=window.panelbear||function(){window.panelbearQ=window.panelbearQ||[],panelbearQ.push(arguments)},panelbear("config",{site: "6ypKAkp1UIM"});',
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
