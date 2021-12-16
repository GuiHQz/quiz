import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./QuestionScreen.style";

interface Teste {
    title: string,
    answer: string,
}

export const QuestionScreen: React.FC<Teste> = ({ title, answer }) => {
    const showAnswer = () => {

    };

    const style = useStyles();

    return (
        <Box className={style.contentArea}>
            <h1 className={style.h1}>{title}</h1>
            <button>Mostrar resposta</button>
            <p className={style.p}>{answer}</p>
        </Box>
    );
};