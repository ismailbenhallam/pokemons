import {Box, BoxProps} from '@chakra-ui/react';
import {
    StyledCell,
    StyledContainer,
    StyledFlexContainer,
    StyledHalfFilledCellContainer,
    StyledStatBarContainer,
    StyledStatContainer,
    StyledStatName,
    StyledTitle
} from './PokemonStats.style'
import {PokemonStat} from "utils/types";
import {statName} from "./PokemonStats.service";

const CELLS = 12
const MAX = 255
const CELL_CAPACITY = MAX / CELLS
const BG_COLOR = "secondary.500";

const StatBar = (props: { ev: number, name: string }) => {
    const {ev, name} = props
    const filledCells = Math.floor(ev * CELLS / MAX)
    const percentOfCell = (ev - filledCells * CELL_CAPACITY) * 100 / CELL_CAPACITY

    return <StyledStatBarContainer title={`${name}: ${ev}`}>
        {Array.from(Array(filledCells).keys()).map((_, index) =>
            <StyledCell key={`filled-${index}`} bgColor={BG_COLOR} flex="1 1 auto"/>
        )}
        {Array.from(Array(CELLS - filledCells).keys())
            .map((_, index) => {
                    if (percentOfCell && index == 0) return (
                        <StyledHalfFilledCellContainer key={`notfilled-${index}`}>
                            <StyledCell bg={BG_COLOR} h={`${percentOfCell}%`}/>
                        </StyledHalfFilledCellContainer>)
                    return <StyledCell bg="white" flex="1 1 auto" key={`notfilled-${index}`}/>
                }
            )}
    </StyledStatBarContainer>
}

const Stat = (props: { name: string, ev: number }) => {
    const {name, ev} = props
    return (
        <StyledStatContainer>
            <Box flexBasis={"70px"}><StyledStatName>{statName(name)}</StyledStatName></Box>
            <StatBar name={name} ev={ev}/>
        </StyledStatContainer>)
}

const PokemonStats = (props: { stats: PokemonStat[] } & BoxProps) => {
    return (
        <StyledContainer {...props}>
            <StyledTitle>Stats</StyledTitle>
            <StyledFlexContainer>
                {props.stats.map(stat =>
                    <Stat key={stat.stat.name} name={stat.stat.name} ev={stat.base_stat}/>
                )}
            </StyledFlexContainer>
        </StyledContainer>
    );
}

export default PokemonStats