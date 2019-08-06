import { css } from 'styled-components';

export const desktopCss = (...args) => css`
  @media screen and (min-width: 768px) {
    ${css(...args)}
  }
`;
