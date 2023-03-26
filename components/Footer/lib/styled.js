import styled from 'styled-components'
import { COLORS } from '../../../utils/constants'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${COLORS.cream};
  padding: 32px 0px;
  color: ${COLORS.espresso};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Litila One';
  font-variation-settings: 'wght' 650;
  font-size: 18px;
  flex-direction: column;

  p {
    margin: 0px;
  }
`
