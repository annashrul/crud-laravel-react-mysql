import styled, {css} from 'styled-components';
export const Image = styled.img`
  width:100%;
  border:1px solid black;
`;

export const HeroImage = styled.div`
  height:400px;
  background-color:#222;
  background-repeat:no-repeat;
  background-position:center;
  background-attachment:fixed;

  display:flex;
  flex-direction:column;
  align-content:center;
  justify-content:center;
  text-align:center;
  color:white;
  font-size:1em;

  h1{
    margin-bottom:0px;
    margin-top:0px;
  }
  h2{
    margin-bottom:-25px;
  }
`;

export const RevealP = styled.p`
  font-weight:400;
  padding:0px 20px 0px 20px;
  text-align:justify;
  font-weight:600;
`;

