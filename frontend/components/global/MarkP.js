import React from "react";
import * as PropTypes from "prop-types";

// TODO(ra): Get out of using mark bc it has the wrong semantics
// This can just be a styled span
const MarkP = ({children}) => <p><mark>{children}</mark></p>;

export default MarkP;
