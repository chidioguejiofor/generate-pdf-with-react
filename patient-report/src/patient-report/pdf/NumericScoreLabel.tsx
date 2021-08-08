import styled from "@react-pdf/styled-components";

const Wrapper = styled.View`

`;

const ScoreLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-bottom: 4px;
  
`;

const ScoreValue = styled.Text`
  border: 1px solid #000000;
  height: 32px;
  width: 101px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  padding-top: 8px;
  font-size: 14px;
  
`;

type NumericeScoreLabelProps = {
  score: number;
  name: string;
}
const NumericeScoreLabel = (props: NumericeScoreLabelProps) => {
  const { score, name} = props;
  return (
    <Wrapper>
      <ScoreLabel>{name}</ScoreLabel>
      <ScoreValue> {score || 0}</ScoreValue>
    </Wrapper>
  );
};

export default NumericeScoreLabel;
