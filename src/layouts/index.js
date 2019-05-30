import React from "react";
import styled from 'styled-components'
import { styles } from '../constants'

const layout = `
  width: 1170px;
  margin: 0 auto;
  color: #07001F;
  font-family: sans-serif;
`

const LayoutMain = styled.main`
  ${layout}
  display: flex;
`
const LayoutHeader = styled.header`${layout}`
const LayoutFooter = styled.footer`
  ${layout}

  p::before {
    content: "©";
    padding-right: 5px;
  }
`
export const LayoutHr = styled.hr`
  height: 1px; 
  overflow: hidden;
  background-color: ${styles.HR_COLOR};
  border: none;
  width: 100%;
  margin: 0;
`

const Layout = ({ children }) => (
  <>
    <LayoutHeader><h1>Список животных</h1></LayoutHeader>
    <LayoutHr />
    <LayoutMain>{children}</LayoutMain>
    <LayoutHr />
    <LayoutFooter><p>{new Date().getFullYear()}</p></LayoutFooter>
  </>
);

export default Layout;
