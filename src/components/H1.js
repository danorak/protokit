import styled from 'styled-components';
import { color, fontFamily, fontSize, fontWeight } from 'styled-system';

const H1 = styled.h1`
    ${fontSize};
    ${fontFamily};
    ${color};
    ${fontWeight};
`;

H1.defaultProps = {
    color: 'black',
    fontSize: 6
};

export default H1;