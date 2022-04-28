import styled from "styled-components";

export const ContainerWithSidebar = styled.div`
  padding-top: 4.25rem;
  max-width: 100vw;
  min-height: 100vh;
`

const RowViewport = "41.875em";

interface SidebarOpenProp {
  sidebarOpen: boolean
}

export const ContentWrapper = styled.article<SidebarOpenProp>`
  flex: 1 1 auto;
  padding: 1rem 25px 5rem 25px;
  display: flex;
  gap: 3rem;
  flex-direction: column-reverse;
  
  @media (min-width: ${RowViewport}) {
    margin-left: ${({sidebarOpen}) => sidebarOpen ? "320px" : 0};
    transition: margin-left 0.5s ease;
    padding-top: 3rem;
    flex-direction: row;
    gap: 13px;
  }
  
  align-items: flex-start;
`