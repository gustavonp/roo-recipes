import styled from 'styled-components'
import { COLORS } from '../../../utils/constants'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 330px;
  background-color: ${COLORS.cream};
  padding: 0px;
  color: ${COLORS.espresso};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 280px;

    .left {
      flex-basis: 50%;
      padding: 30px;
      padding-left: var(--margin-full);

      svg {
        width: 275px;
      }
    }

    .right {
      height: 100%;
      flex-basis: 32%;
      position: relative;

      img {
        position: absolute;
        right: var(--margin-full);
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .top .left {
      padding-left: var(--margin-half);
    }

    .top .right img {
      right: var(--margin-half);
    }
  }

  @media only screen and (max-width: 700px) {
    .top .left {
      padding-left: var(--margin-small);
    }

    .top .right img {
      right: var(--margin-small);
    }
  }

  @media only screen and (max-width: 650px) {
    height: 200px;

    .top {
      height: 150px;
    }

    .top .left {
      flex-basis: 100%;
      padding: var(--margin-small);
      svg {
        width: 100%;
      }
    }

    .top .right {
      display: none;
    }
  }

  .bottom {
    position: relative;
    height: 50px;
    width: 100%;

    ::selection {
      background-color: salmon;
      color: white;
    }
    .parallax > use {
      animation: move-forever 20s linear infinite;
      &:nth-child(1) {
        animation-delay: -2s;
      }
      &:nth-child(2) {
        animation-delay: -2s;
        animation-duration: 50s;
      }
      &:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 10s;
      }
    }

    @keyframes move-forever {
      0% {
        transform: translate(-90px, 0%);
      }
      100% {
        transform: translate(85px, 0%);
      }
    }

    /*prevent many large-by-comparison ripples by shrinking the height*/
  }
`;
