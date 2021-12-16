import React, { useState } from 'react';
import './App.css';
import { Box } from "@mui/material";
import { SelectBox } from "components/SelectBox";
import { QuestionScreen } from "components/QuestionScreen";

function App() {
    const [showQuestion, setShowQuestion] = useState({} as any);

    const [eachQuestion, setEachQuestion] = useState([{

    }]);

    return (
        <Box>
            <Box className="title">
                QUIZ - TWITCH.TV/GUIHZ
            </Box>

            <Box className="main">
                {showQuestion.questionId !== undefined &&
                    <SelectBox />
                }
            </Box>
            <Box>
                {showQuestion.questionId === undefined &&
                    <QuestionScreen
                        title="1) Quais as cores da Espanha?" 
                        answer="Vermelho e Amarelo"
                    />
                }
            </Box>
        </Box>
    );
}

export default App;
