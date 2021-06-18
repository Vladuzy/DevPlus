import styled from 'styled-components'

export const TitleSelectedContainer = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  
  h2 {
    flex-grow: 1;
    color: var(--branco);
    font-weight: 300;
    font-size: 30px;
    text-align: center;
  }

  button {
    width: ${({ group }) => group ? '140px' : '160px'};
    height: 35px;
    border-radius: 10px;
    border: ${({ group }) => group ? '2px solid var(--verde)' : '2px solid var(--amarelo)'};
    background: none;
    color: ${({ group }) => group ? 'var(--verde)' : 'var(--amarelo)'};
    margin-left: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const SomethingSelectedContainer = styled.section`
  height: calc(47% - 25px);
`

export const TitleSomethingSelectedContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 30px;

  h2 {
    margin-left: 30px;
    color: var(--branco);
    font-weight: 300;
  }

  button {
    width: ${({ meta }) => meta ? '125px' : '150px'} ;
    height: 30px;
    border: 2px solid var(--verde);
    border-radius: 10px;
    background: none;
    color: var(--verde);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const GroupContentContainer = styled.div`
  height: calc(100% - 40px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  svg {
    color: ${({ type }) => type === 'All' ? 'var(--amarelo)' : 'var(--verde)'};
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .disabled {
    color: rgba(33, 52, 58, 0.8) ;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 98%;
  border: 1px solid green;
`
