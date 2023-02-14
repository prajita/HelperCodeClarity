import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style.css";
import { CdsButton } from '@cds/react/button';

const Button = ({
    action,
    status,
    size,
    block,
    loadingState,
    children,
    disabled,
    download,
    externalLink,
    link,
    onClick,
    target,
    ...restOfTheProps   
}) => {

    if (externalLink != null) {
        return (
            <a
                href={externalLink}
                disabled={disabled}
                target={target}
                {...{
                    ...(download != null && { download })
                }}
            >
                {children}
            </a>
        );
    } else if (link != null) {
        return (
            <Link  to={link} disabled={disabled}>
                {children}
            </Link>
        );
    } else {
        return (
            <CdsButton
                role="button"
                action={action}
                onClick={onClick}
                disabled={disabled}
                status={status}
                {...restOfTheProps}
            >
                {children}
            </CdsButton>
        );
    }
};

Button.propTypes = {
    action: PropTypes.string,
    status: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    loadingState: PropTypes.string ,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    externalLink: PropTypes.string,
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    download: PropTypes.string,
    target: PropTypes.string
    
};

Button.defaultProps = {
    block: false,
    disabled: false,
    loadingState: "default",
    size: "md",
    status: "primary",
    action: "solid"
};

export default Button;

/**
 * @see https://clarity.design/documentation/buttons#examples
 */
