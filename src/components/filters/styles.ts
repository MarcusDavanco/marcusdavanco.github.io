import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 33.125rem;
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 204.52px;
    width: 207.49px;
    background-image: url("data:image/svg+xml,%3Csvg width='208' height='206' viewBox='0 0 208 206' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.7825 180.206C29.4754 178.443 34.7624 176.945 39.9404 175.134C44.3588 173.588 48.6185 171.59 53.0283 170.014C53.9291 169.693 55.1832 170.357 56.2741 170.566C55.5766 171.554 55.0827 173.099 54.149 173.439C47.1643 175.992 45.8047 182.747 42.7388 188.239C39.6844 193.711 36.8152 199.315 33.2899 204.468C32.612 205.46 28.9651 205.316 27.2187 204.523C19.1176 200.847 11.1786 196.806 3.24886 192.763C1.99504 192.125 1.08832 190.806 0.0205994 189.801C1.12019 189.196 2.16871 188.46 3.328 188.008C9.97969 185.413 16.659 182.885 23.7825 180.206ZM23.8287 195.901C24.3818 194.971 24.935 194.042 25.4888 193.111C24.3539 193.256 23.2189 193.401 22.0844 193.545C22.4715 194.221 22.8588 194.899 23.8287 195.901Z' fill='%232E2E2E'/%3E%3Cpath d='M203.918 6.28539C193.875 5.90663 184.289 5.28167 174.692 4.98223C172.6 4.91655 170.496 6.26105 168.35 6.48027C167.136 6.60372 165.823 5.75834 164.554 5.34922C165.326 4.59045 165.976 3.40884 166.889 3.14768C170.494 2.11825 174.171 0.725247 177.841 0.664094C185.693 0.532104 193.557 1.14009 201.415 1.45956C201.846 1.47703 202.269 1.69778 202.699 1.71169C204.304 1.76511 205.91 1.77124 207.515 1.79517C206.468 3.24911 205.42 4.70302 203.918 6.28539Z' fill='%232E2E2E'/%3E%3Cpath d='M19.0587 118.719C19.8398 123.769 20.6102 128.353 21.08 132.968C21.2396 134.545 20.0979 135.803 18.7178 134.097C17.3701 132.43 16.396 130.356 15.671 128.315C14.7966 125.851 13.5767 123.133 13.8843 120.7C14.6314 114.804 16.1002 108.991 17.4892 103.195C17.6813 102.392 19.0661 101.875 19.8982 101.225C20.3412 102.329 21.2717 103.493 21.143 104.524C20.5704 109.125 19.6953 113.688 19.0587 118.719Z' fill='%232E2E2E'/%3E%3Cpath d='M30.9565 59.6232C33.4771 55.0974 35.8133 50.8518 38.2164 46.6441C38.5649 46.034 39.1684 45.2867 39.7695 45.162C41.0455 44.8986 42.3977 45.0037 43.7186 44.9577C43.405 45.972 43.2181 47.0474 42.7579 47.9902C38.8482 56.0045 34.9453 64.0237 30.8758 71.9579C30.3453 72.9916 28.8848 73.5484 27.855 74.326C27.6401 73.0393 26.9823 71.6322 27.2928 70.4879C28.2634 66.9106 29.5999 63.4318 30.9565 59.6232Z' fill='%232E2E2E'/%3E%3Cpath d='M83.871 11.9396C85.861 12.8233 85.9333 14.8972 84.2054 15.7209C78.4025 18.4857 72.5628 21.1971 66.6049 23.5981C65.3272 24.1129 63.47 23.3092 61.947 22.8769C61.8165 22.8401 61.871 20.3808 62.3814 20.124C67.708 17.4461 73.1008 14.8849 78.5815 12.541C80.0016 11.9342 81.7951 12.2025 83.871 11.9396Z' fill='%232E2E2E'/%3E%3Cpath d='M134.41 0.764318C135.132 0.968491 135.603 0.910661 135.987 1.06709C137.687 1.76156 140.747 2.43965 140.794 3.26603C140.951 6.044 138.062 5.64824 136.301 5.7971C130.764 6.26487 125.199 6.40209 119.646 6.69268C119.19 6.71698 118.593 7.18524 118.319 7.02011C116.982 6.21325 115.732 5.26146 114.451 4.36171C115.864 3.58815 117.211 2.33559 118.703 2.12943C123.814 1.42248 128.976 1.08202 134.41 0.764318Z' fill='%232E2E2E'/%3E%3Cpath d='M16.3831 161.939C17.1292 157.932 18.3837 157.16 20.1701 159.621C22.9946 163.513 25.2522 167.881 27.2268 172.282C27.6789 173.29 26.0056 175.254 25.3104 176.778C24.2953 176.139 22.7992 175.74 22.3472 174.824C20.296 170.662 18.5384 166.356 16.3831 161.939Z' fill='%232E2E2E'/%3E%3C/svg%3E%0A");
    position: absolute;
    left: 20%;
    bottom: -27%;
    z-index: -1;

    @media (max-width: 720px) {
      bottom: -5%;
      left: 2%;
      transform: rotate(-10deg);
      opacity: 0.5;
    }
  }

  &:after {
    content: "";
    height: 256.29px;
    width: 167.99px;
    background-image: url("data:image/svg+xml,%3Csvg width='169' height='257' viewBox='0 0 169 257' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M27.1305 230.918C27.0035 224.959 26.7536 219.47 26.8352 213.985C26.9047 209.305 27.4539 204.632 27.5551 199.95C27.5754 198.994 26.5488 198.014 26.0053 197.045C25.2884 198.019 23.9794 198.976 23.9511 199.969C23.7373 207.403 17.7583 210.828 13.5176 215.473C9.2918 220.1 4.88211 224.594 1.10753 229.567C0.38101 230.524 1.66982 233.938 2.97408 235.345C9.02285 241.868 15.3657 248.123 21.7081 254.368C22.7105 255.355 24.2482 255.799 25.5392 256.494C25.7656 255.26 26.1325 254.032 26.1947 252.79C26.5541 245.659 26.8406 238.523 27.1305 230.918ZM12.2261 235.835C12.9336 235.016 13.6403 234.198 14.3478 233.378C14.5692 234.501 14.7906 235.623 15.0127 236.745C14.2484 236.592 13.4833 236.439 12.2261 235.835Z' fill='%23595959'/%3E%3Cpath d='M135.19 5.04096C138.724 14.4495 142.348 23.3464 145.665 32.3562C146.389 34.3205 145.778 36.7409 146.249 38.8469C146.516 40.0378 147.732 41.0158 148.522 42.09C148.998 41.1186 149.913 40.1283 149.872 39.1792C149.709 35.4334 149.869 31.505 148.766 28.0035C146.41 20.513 143.347 13.2445 140.56 5.89036C140.407 5.48661 140.064 5.1551 139.915 4.75118C139.357 3.24569 138.843 1.72412 138.313 0.208496C137.265 1.6621 136.217 3.11556 135.19 5.04096Z' fill='%23595959'/%3E%3Cpath d='M86.9583 215.962C81.9205 216.818 77.3279 217.536 72.8012 218.549C71.2544 218.896 70.4216 220.377 72.4764 221.147C74.4843 221.899 76.759 222.167 78.925 222.21C81.5391 222.261 84.5036 222.559 86.7144 221.498C92.0719 218.925 97.1228 215.694 102.182 212.544C102.883 212.108 102.936 210.631 103.289 209.636C102.103 209.565 100.704 209.05 99.7666 209.498C95.5825 211.495 91.53 213.768 86.9583 215.962Z' fill='%23595959'/%3E%3Cpath d='M139.262 185.994C142.759 182.172 146.049 178.613 149.281 175.003C149.75 174.48 150.268 173.671 150.196 173.062C150.043 171.768 149.516 170.518 149.142 169.25C148.279 169.868 147.317 170.386 146.568 171.12C140.201 177.363 133.827 183.601 127.586 189.97C126.773 190.8 126.706 192.361 126.294 193.584C127.583 193.381 129.126 193.561 130.113 192.904C133.2 190.853 136.078 188.485 139.262 185.994Z' fill='%23595959'/%3E%3Cpath d='M167.774 120.719C166.307 119.111 164.316 119.698 164.081 121.598C163.292 127.977 162.566 134.374 162.172 140.786C162.087 142.16 163.437 143.668 164.328 144.977C164.404 145.089 166.72 144.26 166.802 143.694C167.659 137.794 168.384 131.868 168.876 125.928C169.002 124.389 168.181 122.772 167.774 120.719Z' fill='%23595959'/%3E%3Cpath d='M162.401 69.2398C161.979 68.619 161.884 68.1534 161.615 67.8386C160.418 66.4454 158.808 63.7567 158.009 63.9732C155.324 64.7025 156.612 67.3181 157.028 69.036C158.334 74.4368 159.963 79.7602 161.443 85.1198C161.564 85.5606 161.309 86.2746 161.552 86.4831C162.74 87.4965 164.038 88.3812 165.297 89.3121C165.584 87.7266 166.346 86.0531 166.071 84.5728C165.126 79.5005 163.817 74.4956 162.401 69.2398Z' fill='%23595959'/%3E%3Cpath d='M46.8003 232.163C50.3658 230.189 50.7019 228.754 47.8023 227.838C43.2166 226.388 38.3593 225.627 33.5597 225.145C32.4601 225.035 31.1262 227.243 29.9003 228.384C30.8266 229.146 31.6789 230.439 32.6909 230.578C37.2874 231.208 41.9287 231.515 46.8003 232.163Z' fill='%23595959'/%3E%3C/svg%3E%0A");
    position: absolute;
    right: 17%;
    bottom: -25%;
    z-index: -1;

    @media (max-width: 720px) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    height: unset;
  }
`;

export const Background = styled.div`
  width: 100%;
  max-height: 28.75rem;
  background: #111;
  padding-top: 3.75rem;

  @media (max-width: 720px) {
    max-height: unset;
    padding-bottom: 3.75rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  justify-content: center;
  gap: 2.5rem;
  grid-template-columns: repeat(3, 22.563rem);

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Card = styled.article`
  width: 100%;
  min-height: 29.375rem;
  background-color: #ff004d;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;

  @media (max-width: 720px) {
    max-width: 22.563rem;
  }
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 1.5rem;
  line-height: 2.063rem;
  margin-bottom: 0.625rem;
  font-weight: bold;

  &:first-of-type {
    margin-top: 2rem;
  }
`;
