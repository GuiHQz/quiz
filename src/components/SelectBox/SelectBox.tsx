import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./SelectBox.style";

export const SelectBox: React.FC = () => {
    const style = useStyles();

    return (
        <Box>
            <Box className={style.flexArea}>
                <div className={style.number}>01</div>
                <div className={style.number}>02</div>
                <div className={style.number}>03</div>
                <div className={style.number}>04</div>
                <div className={style.number}>05</div>
                <div className={style.number}>06</div>
            </Box>
            <Box className={style.flexArea}>
                <div className={style.number}>07</div>
                <div className={style.number}>08</div>
                <div className={style.number}>09</div>
                <div className={style.number}>10</div>
                <div className={style.number}>11</div>
                <div className={style.number}>12</div>
            </Box>
            <Box className={style.flexArea}>
                <div className={style.number}>13</div>
                <div className={style.number}>14</div>
                <div className={style.number}>15</div>
                <div className={style.number}>16</div>
                <div className={style.number}>17</div>
                <div className={style.number}>18</div>
            </Box>
            <Box className={style.flexArea}>
                <div className={style.number}>19</div>
                <div className={style.number}>20</div>
                <div className={style.number}>21</div>
                <div className={style.number}>22</div>
                <div className={style.number}>23</div>
                <div className={style.number}>24</div>
            </Box>
            <Box className={style.flexArea}>
                <div className={style.number}>25</div>
                <div className={style.number}>26</div>
                <div className={style.number}>27</div>
                <div className={style.number}>28</div>
                <div className={style.number}>29</div>
                <div className={style.number}>30</div>
            </Box>
        </Box>
    );
}