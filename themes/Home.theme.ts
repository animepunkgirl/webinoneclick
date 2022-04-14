import {css} from "styled-components";

export const homeTheme = {
  colors: {
    lightBg: "#292d3e",
    darkBg: "#202331",
    white: "#eff",
    orange: "#ffdb76",
    darkOrange: "#ff9668",
    red: "#f07178",
    cyan: "#89ddff",
    blue: "#70b0ff",
    gray: "#676e95",
    purple: "#c792ea",
    green: "#c3e88d",
  },
  animations: {
    headerLoading: 1500,
    themeLoading: 2500,
    pageLoading: 3000
  },
  fontSize: {
    sm: 1,
    md: 1.25,
    lg: 1.5,
    xl: 2.75,
    xxl: 4,
  },
  maxWidthContainer: 1300
}

/*  Typography   */

export const Typography = {
  htmlMarkup: css`
    color: ${p => p.theme.colors.red};

    &::before,
    &::after {
      color: ${p => p.theme.colors.cyan};
    }

    &::before {
      font-size: 0.75em;
      content: "<"
    }

    &::after {
      font-size: 0.75em;
      content: ">"
    }
  `,
  htmlMarkupWithClosingTag: css`
    color: ${p => p.theme.colors.red};

    &::before,
    &::after {
      color: ${p => p.theme.colors.cyan};
    }

    &::before {
      font-size: 0.9em;
      content: "<"
    }

    &::after {
      font-size: 0.9em;
      content: "/>";
    }

    @media (min-width: 350px) {
      &::after {
        content: " />"
      }
    }
  `,
  htmlMarkupClosingTag: css`
    color: ${p => p.theme.colors.red};

    &::before,
    &::after {
      color: ${p => p.theme.colors.cyan};
    }

    &::before {
      font-size: 0.75em;
      content: "</"
    }

    &::after {
      font-size: 0.75em;
      content: ">"
    }
  `,
  const: css`
  }
    color: ${p => p.theme.colors.white};

    &::before {
      content: "const ";
      color: ${p => p.theme.colors.purple};
    }

    &::after {
      content: " = "
    }
  `,
  array: css`
    color: ${p => p.theme.colors.white};

    &::before,
    &::after {
      color: ${p => p.theme.colors.blue};
    }

    &::before {
      content: "{ "
    }

    &::after {
      content: " }"
    }
  `,
  commented: css`
    background-color: #717cb470;
    color: #fff;

    &:hover {
      background-color: #292d3e;
      color: #c792ea;
    }
  `,
  cssClass: css`
    color: #ffcb6b;

    &::before {
      content: ".";
      color: cyan;
    }
  `,
  cssId: css`
    color: ${p => p.theme.colors.purple};

    &::before {
      content: "#";
    }
  `,
  string: css`
    color: ${p => p.theme.colors.green};

    &::before,
    &::after {
      content: '"';
    }
  `,
  upwork: css`
    color: ${p => p.theme.colors.green};
    text-decoration: underline;
    &:hover {
      font-weight: bold;
    }
  `
}