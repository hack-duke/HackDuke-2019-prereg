import { css } from "styled-components";

export const desktopOnly = rules => css`
  @media screen and (min-width: 768px) {
    ${rules}
  }
`;
