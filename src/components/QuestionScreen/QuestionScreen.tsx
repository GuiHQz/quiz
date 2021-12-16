import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./QuestionScreen.style";

interface Teste {
    title: string,
    answer: string,
}

export const QuestionScreen: React.FC<Teste> = ({ title, answer }) => {
    const showAnswer = () => {
        const p = document.getElementById("pID") as HTMLStyleElement;
        const troca = p.style.display;
        p.style.display = troca == "block" ? "none" : "block";
    };

    const styles = useStyles();

    return (
        <Box className={styles.contentArea}>
            <h1 className={styles.h1}>{title}</h1>
            <button onClick={showAnswer} className={styles.button}>Mostrar resposta</button>
            <p id="pID" className={styles.p}>{answer}</p>
        </Box>
    );
};